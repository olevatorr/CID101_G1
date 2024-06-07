<template>
    <section class="section section-register">
        <div class="container">
            <div class="register-box row">
                <div class="register-txt col-12 col-md-7 col-lg-6">
                    <div class="register-login ">
                        <div class="from-group">
                            <label>會員姓名</label>
                            <input type="text" maxlength="20" placeholder="請輸入姓名">
                        </div>
                        <div class="from-group">
                            <label>會員帳號</label>
                            <input type="text" name="" id="" maxlength="20" placeholder="請輸入帳號">
                        </div>
                        <div class="from-group">
                            <label>會員密碼</label>
                            <input type="number" name="" id="" maxlength="20" placeholder="請輸入密碼">
                        </div>
                        <div class="from-group">
                            <label>確認密碼</label>
                            <input type="number" name="" id="" maxlength="20" placeholder="再輸入一次密碼">
                        </div>
                        <div class="from-group">
                            <label>電話號碼</label>
                            <input type="tel" name="" id="" placeholder="請輸入電話">
                        </div>
                        <div class="from-group ">
                            <label>會員信箱</label>
                            <input type="email" name="" id="" placeholder="請輸入信箱">
                        </div>
                        <div class="from-group ">
                            <label>會員地址</label>
                            <input type="text" name="" id="" placeholder="請輸入地址">
                        </div>
                        <RouterLink to="/Member"><button>立即註冊</button></RouterLink>
                        <div class="other-login">
                            <p>其他登入方式</p>
                            <div class="third-party">
                            <a href="#"><i class="fa-brands fa-google"></i></a>
                            <a href="#"><i class="fa-brands fa-facebook"></i></a>
                            <a href="#"><i class="fa-brands fa-line"></i></a>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="register-box-img col-12 col-md-5 col-lg-6">
                    <div class="register-logo-box">
                        <div class="img">
                            <img src="../../public/img/member/logo.png" alt="logo">
                        </div>
                        <span>潔淨海洋&emsp;綠色明天</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
