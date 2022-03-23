<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Grootech is an agro-based platform with the primary purpose of interconnecting all the players in the agricultural sector">
    <link rel="shortcut icon" href="./assets/illustrations/grootech__logo.svg" type="image/x-icon">
    <link rel="stylesheet" href="css/dashboard.css">
    <title>Grootech | Dashboard</title>
</head>
<body>
    <section class="section-header">
        <header class="header header--1 u-flex u-align-center">
            <div class="container u-w-full">
                <div class="header__wrapper">
                    <div class="header__logo">
                        <a href="" class="header__logo-link">
                            <img src="./assets/illustrations/grootech__logo.svg" alt="grootech logo" class="header__logo-image">
                            <p class="header__logo-text">
                                Grootech
                            </p>
                        </a>
                    </div>
                    <nav class="dashboard__nav">
                        <ul class="dashboard__list">
                            <li class="dashboard__item">
                                <a href="" class="dashboard__link dashboard__link--active" name="today">
                                    <span>
                                        Today
                                    </span>
                                </a>
                            </li>
                            <li class="dashboard__item">
                                <a href="" class="dashboard__link" name="inbox">
                                    Inbox
                                </a>
                            </li>
                            <li class="dashboard__item">
                                <a href="" class="dashboard__link" name="wallet">
                                    Wallet
                                </a>
                            </li>
                            <li class="dashboard__item">
                                <a href="" class="dashboard__link" name="proposals">
                                    Proposals
                                </a>
                            </li>
                            <li class="dashboard__item">
                                <a href="" class="dashboard__link" name="timeline">
                                    Timeline
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div class="header__profile">
                        <button class="header__icon header__icon--lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                        </button>
                        <div class="header__image-box">
                            <img src="./assets/images/avatars/avatar--1.png" alt="" class="header__image">
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </section>
    <section class="section-intro">
        <div class="container u-h-100">
            <div class="intro u-h-100">
                <h1 class="intro__header">
                    Today
                </h1>
                <a href="" class="intro__link">
                    <div class="intro__box">
                        <h4 class="intro__title">
                            Complete important details
                        </h4>
                        <p class="intro__text">
                            Required to publish
                        </p>
                    </div>
                </a>
            </div>
        </div>
    </section>
    <section class="section-dashboard">
        <div class="container">
            <div class="dashboard">
                <div class="dashboard__header">
                    <h1 class="dashboard__heading">
                        Welcome!
                    </h1>
                </div>
                <p class="dashboard__paragraph">
                    You are on your way to be become a incredible member—here’s how to start.
                </p>
                <div class="dashboard__wrapper dashboard__wrapper--grid">
                    <div class="card card--grid card--darker">
                        <a href="" class="card__link">
                            <div class="card__image-box">
                                <img src="./assets/images/cities/grootech__city--5.jpg" alt="" class="card__image">
                            </div>
                            <div class="card__body">
                                <h1 class="card__header card__header--sm">
                                    <!-- Just dummy texts -->
                                    Request for funding
                                </h1>
                            </div>
                        </a>
                    </div>
                    <div class="card card--grid card--darker">
                        <a href="" class="card__link">
                            <div class="card__image-box">
                                <img src="./assets/images/cities/grootech__city--9.jpg" alt="" class="card__image">
                            </div>
                            <div class="card__body">
                                <h1 class="card__header card__header--sm">
                                    <!-- Just dummy texts -->
                                    Prepare for guest
                                </h1>
                            </div>
                        </a>
                    </div>
                    <div class="card card--grid card--darker">
                        <a href="" class="card__link">
                            <div class="card__image-box">
                                <img src="./assets/images/cities/grootech__city--3.jpg" alt="" class="card__image">
                            </div>
                            <div class="card__body">
                                <h1 class="card__header card__header--sm">
                                    <!-- Just dummy texts -->
                                    Make a Todo List
                                </h1>
                            </div>
                        </a>
                    </div>
                    <div class="card card--grid">
                        &nbsp;
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section-account">
        <div class="container">
            <div class="account">
                <div class="account__header">
                    <h1 class="account__heading">
                        Connections
                    </h1>
                </div>
                <div class="account__wrapper">
                    <ul class="account__tabs">
                        <li class="account__tab">
                            <button class="account__button account__button--active" data-category="current-connections">
                                Current Connections (0)
                            </button>
                        </li>
                        <li class="account__tab">
                            <button class="account__button" data-category="pending-connections">
                                Pending Connections (0)
                            </button>
                        </li>
                        <li class="account__tab"> 
                            <button class="account__button" data-category="completed-connections">
                                Completed Connections (0)
                            </button>
                        </li>
                        <li class="account__tab">
                            <button class="account__button" data-category="partners">
                                Partners (0)
                            </button>
                        </li>
                    </ul>
                    <div class="account__view">
                        <div class="account__content account__content--active" id="current-connections">
                            <div class="empty">
                                <div class="empty__icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M75.23 33.4L320 63.1L564.8 33.4C571.5 32.56 578 36.06 581.1 42.12L622.8 125.5C631.7 143.4 622.2 165.1 602.9 170.6L439.6 217.3C425.7 221.2 410.8 215.4 403.4 202.1L320 63.1L236.6 202.1C229.2 215.4 214.3 221.2 200.4 217.3L37.07 170.6C17.81 165.1 8.283 143.4 17.24 125.5L58.94 42.12C61.97 36.06 68.5 32.56 75.23 33.4H75.23zM321.1 128L375.9 219.4C390.8 244.2 420.5 255.1 448.4 248L576 211.6V378.5C576 400.5 561 419.7 539.6 425.1L335.5 476.1C325.3 478.7 314.7 478.7 304.5 476.1L100.4 425.1C78.99 419.7 64 400.5 64 378.5V211.6L191.6 248C219.5 255.1 249.2 244.2 264.1 219.4L318.9 128H321.1z"/></svg>
                                </div>
                                <p class="empty__text">
                                    You don't have any connections yet.
                                </p>
                            </div>
                            <div class="loading loading--hidden">
                                <div class="dot-flashing">&nbsp;</div>
                            </div>
                        </div>
                        <div class="account__content" id="pending-connections">
                            <div class="empty">
                                <div class="empty__icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M75.23 33.4L320 63.1L564.8 33.4C571.5 32.56 578 36.06 581.1 42.12L622.8 125.5C631.7 143.4 622.2 165.1 602.9 170.6L439.6 217.3C425.7 221.2 410.8 215.4 403.4 202.1L320 63.1L236.6 202.1C229.2 215.4 214.3 221.2 200.4 217.3L37.07 170.6C17.81 165.1 8.283 143.4 17.24 125.5L58.94 42.12C61.97 36.06 68.5 32.56 75.23 33.4H75.23zM321.1 128L375.9 219.4C390.8 244.2 420.5 255.1 448.4 248L576 211.6V378.5C576 400.5 561 419.7 539.6 425.1L335.5 476.1C325.3 478.7 314.7 478.7 304.5 476.1L100.4 425.1C78.99 419.7 64 400.5 64 378.5V211.6L191.6 248C219.5 255.1 249.2 244.2 264.1 219.4L318.9 128H321.1z"/></svg>
                                </div>
                                <p class="empty__text">
                                    You don't have any connections yet.
                                </p>
                            </div>
                            <div class="loading loading--hidden">
                                <div class="dot-flashing">&nbsp;</div>
                            </div>
                        </div>
                        <div class="account__content" id="completed-connections">
                            <div class="empty">
                                <div class="empty__icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M75.23 33.4L320 63.1L564.8 33.4C571.5 32.56 578 36.06 581.1 42.12L622.8 125.5C631.7 143.4 622.2 165.1 602.9 170.6L439.6 217.3C425.7 221.2 410.8 215.4 403.4 202.1L320 63.1L236.6 202.1C229.2 215.4 214.3 221.2 200.4 217.3L37.07 170.6C17.81 165.1 8.283 143.4 17.24 125.5L58.94 42.12C61.97 36.06 68.5 32.56 75.23 33.4H75.23zM321.1 128L375.9 219.4C390.8 244.2 420.5 255.1 448.4 248L576 211.6V378.5C576 400.5 561 419.7 539.6 425.1L335.5 476.1C325.3 478.7 314.7 478.7 304.5 476.1L100.4 425.1C78.99 419.7 64 400.5 64 378.5V211.6L191.6 248C219.5 255.1 249.2 244.2 264.1 219.4L318.9 128H321.1z"/></svg>
                                </div>
                                <p class="empty__text">
                                    You don't have any connections yet.
                                </p>
                            </div>
                            <div class="loading loading--hidden">
                                <div class="dot-flashing">&nbsp;</div>
                            </div>
                        </div>
                        <div class="account__content" id="partners">
                            <div class="empty">
                                <div class="empty__icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M75.23 33.4L320 63.1L564.8 33.4C571.5 32.56 578 36.06 581.1 42.12L622.8 125.5C631.7 143.4 622.2 165.1 602.9 170.6L439.6 217.3C425.7 221.2 410.8 215.4 403.4 202.1L320 63.1L236.6 202.1C229.2 215.4 214.3 221.2 200.4 217.3L37.07 170.6C17.81 165.1 8.283 143.4 17.24 125.5L58.94 42.12C61.97 36.06 68.5 32.56 75.23 33.4H75.23zM321.1 128L375.9 219.4C390.8 244.2 420.5 255.1 448.4 248L576 211.6V378.5C576 400.5 561 419.7 539.6 425.1L335.5 476.1C325.3 478.7 314.7 478.7 304.5 476.1L100.4 425.1C78.99 419.7 64 400.5 64 378.5V211.6L191.6 248C219.5 255.1 249.2 244.2 264.1 219.4L318.9 128H321.1z"/></svg>
                                </div>
                                <p class="empty__text">
                                    You don't have any connections yet.
                                </p>
                            </div>
                            <div class="loading loading--hidden">
                                <div class="dot-flashing">&nbsp;</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section-tips">
        <div class="container">
            <div class="tips">
                <div class="tips__header">
                    <h1 class="tips__heading">
                        Tips & Updates
                    </h1>
                </div>
                <div class="tips__wrapper">
                    <div class="card card--tips card--white">
                        <a href="" class="card__link">
                            <div class="card__image-box">
                                <img src="./assets/images/cities/grootech__city--6.jpg" alt="img" class="card__image">
                            </div>
                            <div class="card__body">
                                <h1 class="card__header card__header--sm card__header--black">
                                    Create a guidebook to share your local tips
                                </h1>
                            </div>
                        </a>
                    </div>
                    <div class="card card--tips card--white">
                        <a href="" class="card__link">
                            <div class="card__image-box">
                                <img src="./assets/images/cities/grootech__city--7.jpg" alt="img" class="card__image">
                            </div>
                            <div class="card__body">
                                <h1 class="card__header card__header--sm card__header--black">
                                    How to create a good listing
                                </h1>
                            </div>
                        </a>
                    </div>
                    <div class="card card--tips card--white">
                        <a href="" class="card__link">
                            <div class="card__image-box">
                                <img src="./assets/images/cities/grootech__city--8.jpg" alt="img" class="card__image">
                            </div>
                            <div class="card__body">
                                <h1 class="card__header card__header--sm card__header--black">
                                    How to take good listing pictures
                                </h1>
                            </div>
                        </a>
                    </div>
                    <div class="card card--tips card--white">
                        <a href="" class="card__link">
                            <div class="card__image-box">
                                <img src="./assets/images/cities/grootech__city--9.jpg" alt="img" class="card__image">
                            </div>
                            <div class="card__body">
                                <h1 class="card__header card__header--sm card__header--black">
                                    Lorem ipsum dolor sit amet.
                                </h1>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="tips__container">
                    <div class="tips__header">
                        <h1 class="tips__heading tips__heading--sm">
                            Learn from our guide
                        </h1>
                    </div>
                    <div class="tips__boxes">
                        <div class="tips__box">
                            <a href="" class="tips__link">
                                Take our tutorials
                            </a>
                        </div>
                        <div class="tips__box">
                            <a href="" class="tips__link">
                                Take our tutorials
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <script src="./js/dashboard.js"></script>
</body>
</html>