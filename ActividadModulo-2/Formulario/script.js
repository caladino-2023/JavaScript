@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-transform: capitalize;
    text-decoration: none;
    list-style: none;
    font-family: 'Poppins', sans-serif;
    
}
body {
    background-color: #F5F5F5;
}
header {
    background-image: url(image/hero.svg);
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 70vh;
    display: flex;
    align-items: center;

}
.container {
    max-width: 1100px;
    margin: 0 auto;

}
.menu {
    position: absolute;
    top: 10px;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1000;
}
.menu .logo {
    font-weight: 700;
    font-size: 25px;
    color: #ffffff;
}

.menu .navbar ul li {
    position: relative;
    float: left;
}
.menu .navbar ul li a {
    font-size: 18px;
    padding: 20px;
    color: #ffffff;
    display: block;
}

.menu .navbar ul li a:hover {
    color: #0EAEF3;
}

#menu {
    display: none;
}

.menu-icono {
    width: 25px;
}

.menu label {
    cursor: pointer;
    display: none;
}

.header-content {
    display: flex;
} 

.content {
    padding: 150px 150px 0px 0px;   
}

.content h1 {
    color: #ffffff;
    font-size: 55px;
    text-transform: uppercase;
    font-weight: 500;
    line-height: 55px;
}

.content p {
    margin-top: 25px;
    color: #AAB1FF;
    text-transform: uppercase;
    font-size: 35px;
    line-height: 40px;
}

.btn-1 {
    display: inline-block;
    background-color: rgba(170, 177, 255, 0.3);
    border: 1px solid #AAB1FF;
    margin: 35px 10px 0px 0px;
    padding: 15px 25px;
    color: #ffffff;
    border-radius: 25px;
}

.btn-1:hover {
    background-color: #AAB1FF;
}

.services {
    padding: 10px 0px;
    display: flex;
    justify-content: space-between;
    text-align: center;
}

.service {
    padding: 25px;
    margin: 0px 10px;
    box-shadow: 0px 0px 20px rgba(135, 141, 214 , 0.3);
}

.service img {
    margin-top: -50px
}

.service h3 {
    font-size: 20px;
    color: #0E0E0E;
    margin-bottom: 10px;

}
.service p {
    color: #525254;
    font-size: 16px;
}

.porfolios {
    padding: 80px 0px;
    text-align: center;
    color: #0E0E0E;
}

.porfolios h2 {
    font-size: 55px;
}

.porfolio {
    display: flex;
    align-items: center;
}

.porfolio img {
    width: 350px;
}
.porfolio-1 {
    text-align: left;
    margin: 100px;
}

.porfolio-1 h3 {
    font-size: 35px;
    margin-bottom: 15px;

}

.porfolio-1 p {
    font-size: 18px;
    color: #525254;
    margin-bottom: 25px;
}

.porfolio-2 {
    text-align: left;
    margin-right: 100px;
}

.porfolio-2 h3 {
    font-size: 35PX;
    margin-bottom: 15PX;
}

.porfolio-2 P {
    font-size: 18PX;
    color: #525254;
    margin-bottom: 25px;
}

.btn-2 {
    display: inline-block;
    padding: 15PX 25PX;
    border-radius: 25PX;
    background-color: #7042B5;
    color: #FFFFFF;
}

.btn-2:hover {
    background-color: #8650D7;
}

footer {
    padding: 200px 0px 30px 0px;
    background-image: url(image/footer.svg);
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
}

.info-content {
    display: flex;
}

.info-price{
    padding: 35px;
    text-align: center;
    background-color: #F5F5F5;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.3);
    margin: 0px 150px 0px 0px;
    color: #0E0E0E;
}

.info-price h2 {
    font-size: 25px;
}

.pric {
    font-size: 14px;
    color: #0EAEF3 !important;
    margin-bottom: 10px;
}

.info-price p {
    font-size: 16px;
    color: #525254;
}

.info-txt {
    margin-left: 35px;
    color: #ffffff;
}

hr {
    margin: 45px 0px;
    border: 0.5px solid #AAB1FF;
}

.enlaces {
    display: flex;
    justify-content: space-between;
    color: #ffffff;
}

.enlaces h3 {
    font-size: 25px;
}

.enlace {
    display: flex;
}

.enlace li a {
    display: block;
    margin: 20px;
    color: #ffffff;
}

.enlace li a:hover {
    color: #0EAEF3;
}

@media (max-width:991px) {
    .menu {
        padding: 20px;
    }
    
    .menu label {
        display: initial;
    }

    .menu .navbar {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background-color: #5B50BC;
        display: none;
    }

    .menu .navbar ul li {
        width: 100%;
    }

    #menu:checked ~ .navbar {
        display: initial;
    }

    header {
        height: 0vh;
        padding: 400px 0px;
        background-position: center center;
    }

    .header-content {
        flex-direction: column;
        text-align: center;
        align-items: center;
        padding: 0px 30px;
    }

    .content {
        padding: 0px;
    }

    .content h1 {
        margin-top: 100px;
        font-size: 45px;
    }

    .content p {
        margin-top: 0px;
    }

    .header-content img {
        width: 150px;
    }

    .services {
        flex-direction: column;
        padding: 50px 30px 0px 30px;
    }

    .service {
        margin-bottom: 50px;
    }

    .porfolios {
        padding: 0px 30px 30px 30px;
    }

    .porfolios h2 {
        margin-bottom: 15px;
    }

    .porfolio {
        flex-direction: column;
    }

    .porfolio img {
        display: none;
    }

    .porfolio-1 {
        text-align: center;
        margin: 0px 0px 25px 0px;
    }

    .porfolio-2 {
        text-align: center;
        margin: 0px 0px 25px 0px;
    }

    footer {
        padding: 0px 30px 30px 30px;
    }

    .info-content {
        flex-direction: column;
        text-align: center;
    }

    .info-price {
        margin: 0px 0px 20px 0px;
    }

    .info-txt {
        margin: 0px;
    }

    hr {
        margin: 25px 0px;
    }

    .enlaces {
        flex-direction: column;
        align-items: center;
    }

    .enlace {
        flex-direction: column;
    }

}