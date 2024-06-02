<template>
    <section class="section section-member">
        <div class="container">
                <div class="member-box row">
                    <div class="member-box-img col-12 col-md-6">
                        <div class="member-logo-box">
                            <div class="img">
                                <img src="../../public/img/member/logo.png" alt="logo">
                            </div>
                            <span>潔淨海洋&emsp;綠色明天</span>
                            <RouterLink to="/RegisterView"><button>加入會員</button></RouterLink>
                        </div>
                    </div>
                    <div class="member-txt col-12 col-md-6">
                        <div class="member-login">
                            <label>帳號</label>
                            <input type="text" maxlength="10" placeholder="請輸入帳號">
                            <label>密碼</label>
                            <input type="password" name="" id="" maxlength="10" placeholder="請輸入密碼">
                        </div>
                        <span class="forgot">
                            <RouterLink to="/ForgetPasswordView">忘記密碼?</RouterLink>
                            <div class="member-button">
                                <RouterLink to="/RegisterView"><button class="add">加入會員</button></RouterLink>
                                <RouterLink to="/ProfileView"><button>&emsp;&emsp;登入&emsp;&emsp;</button></RouterLink>
                            </div>
                        </span>
                        <p>其他登入方式</p>
                        <div class="third-party">
                            <a href="#"><i class="fa-brands fa-google"></i></a>
                            <a href="#"><i class="fa-brands fa-facebook"></i></a>
                            <a href="#"><i class="fa-brands fa-line"></i></a>
                        </div>
                    </div>
                </div>
        </div>
    </section>
</template>
