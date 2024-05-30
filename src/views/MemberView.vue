<template>
        <section class="section section-member body-member">
            <div class="container">
                <div class="member-box col-md-12">
                    <div class="member-box-img col-sm-6 col-md-6">
                        <img src="../../public/img/member/member2.jpg" alt="會員背景圖片">
                        <div class="member-logo-box">
                            <img src="../../public/img/LOGO-white.png" alt="logo">
                            <span>潔淨海洋&emsp;綠色明天</span>
                        </div>
                    </div>
                    <div class="member-txt col-sm-6 col-md-6">
                        <div class="member-login">
                            <label>帳號</label>
                            <input type="text" placeholder="請輸入帳號">
                            <label>密碼</label>
                            <input type="password" name="" id="" placeholder="請輸入密碼">
                        </div>
                        <div class="member-button">
                            <button>&emsp;&emsp;登入&emsp;&emsp;</button>
                            <button class="member-btn">
                                <RouterLink to="/RegisterView">加入會員</RouterLink>
                            </button>
                        </div>
                        <span class="forgot">
                            <RouterLink to="/ForgetPasswordView">忘記密碼?</RouterLink>
                        </span>
                        <p>其他登入方式</p>
                        <a href="#"><i class="fa-brands fa-google-plus"></i></a>
                        <a href="#"><i class="fa-brands fa-facebook"></i></a>
                        <a href="#"><i class="fa-brands fa-line"></i></a>
                    </div>
                </div>
            </div>
        </section>
</template>
