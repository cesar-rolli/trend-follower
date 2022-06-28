from flask_login import current_user, login_required, login_user, logout_user
from app import app
from flask import render_template, request, redirect, url_for, flash
from downloader import otimizador, res
from forms import *
from models import *


@app.route('/', methods=['GET', 'POST'])
def homepage():

    if len(request.form) > 0:
        ticker = request.form['search']
        return redirect(url_for('empresa', ticker=ticker))
        
    return render_template("inicio.html")

@app.route('/<ticker>', methods=['GET', 'POST'])
def empresa(ticker):
     
    form = SearchForm()

    if len(request.form) > 0:
        action = request.form['action']

        if action == 'follow':
            nova_acao = lista_de_acoes(acao = ticker, user_id = current_user.id )
            db.session.add(nova_acao)
            db.session.commit()


    melhor_resultado = otimizador(ticker)

    if melhor_resultado == 'Erro':
        return redirect(url_for('erro', ticker=ticker))


    if form.validate_on_submit() :
        outro_periodo = int(form.periodo.data)
        resultado = res(ticker, outro_periodo)
        return render_template("ticker.html", melhor_resultado=melhor_resultado, resultado=resultado, ticker=ticker, user = current_user, form = form)
        
    return render_template("ticker.html", melhor_resultado=melhor_resultado, ticker=ticker, periodo=0, user = current_user, form = form)

@app.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()

    if form.validate_on_submit():        
        user = User.query.filter_by(username = form.username.data).first()

        if user is None or not user.check_password_hash(form.senha.data):
            flash('Invalid username or password')
            return redirect(url_for('login'))
        
        login_user(user, remember = form.remember.data)
        return redirect(url_for('user', user=current_user))

    return render_template('login.html', form=form)

@app.route('/registro', methods=['GET', 'POST'])
def registro():
    form = RegistrationForm()

    if form.validate_on_submit():
        novo_usuario = User(username = form.username.data, email = form.email.data)
        novo_usuario.set_password(form.senha.data)

        db.session.add(novo_usuario)
        db.session.commit()

        return render_template('certo.html')

    return render_template('registro.html', form=form)

@app.route('/user', methods=['GET', 'POST'])
@login_required
def user():
    carteira = []
    acoes = lista_de_acoes.query.filter_by(user_id = current_user.id).all()

    for acao in acoes:
        carteira.append(otimizador(acao.acao)) 

    return render_template('user.html',  carteira = carteira)

@app.route('/user/sair', methods=['GET', 'POST'])
def logout():
    logout_user()
    return redirect(url_for('homepage'))


@app.route('/erro/<ticker>')
def erro(ticker): 


    return render_template('erro.html', ticker = ticker)

app.run()