<template>
    <section class="section section-mallcart-cart">
        <div class="container">
            <div class="cart-wrap">
                <div class="title">
                    <h3>01</h3>
                    <h3>購物車內容</h3>
                </div>
                <div class="cart-head">
                    <p>項目</p>
                    <p>商品資料</p>
                    <p>小計</p>
                </div>
            </div>
            <div class="cart-info">
                <div class="item">
                    <p>1</p>
                </div>
                <div class="content">
                    <div class="pic">
                        <img src="../../public/img/donate/Mask group.png" alt="">
                    </div>
                    <div class="pic">
                        <p>【為海洋生態出一份力】</p>
                    </div>
                </div>
                <div class="price">
                    <p>NT$ 500</p>
                </div>
                <div class="subtotal">
                    <i class="fa-regular fa-circle-xmark"></i>
                </div>
            </div>
            <div class="cart-price">
                <div class="text">
                    <h3>訂單金額 NT$500</h3>
                </div>
            </div>
            <div class="cart-total">
                <div class="text">
                    <h3>應付金額 NT$ 500</h3>
                </div>
            </div>
        </div>
    </section>

    <section class="section section-mallcart-member">
        <div class="container">
            <div class="cart-member">
                <div class="title">
                    <h3>02</h3>
                    <h3>會員資料</h3>
                </div>
            </div>
            <div class="cart-form">
                <div class="name">
                    <h4>會員名稱</h4>
                    <span>自動帶入會員資料</span>
                </div>
                <div class="phone">
                    <h4>會員電話</h4>
                    <span>自動帶入會員資料</span>
                </div>
                <div class="email">
                    <h4>會員信箱</h4>
                    <span>自動帶入會員資料</span>
                </div>
                <div class="add">
                    <h4>會員地址</h4>
                    <span>自動帶入會員資料</span>
                </div>
            </div>
        </div>
    </section>

    <section class="section section-mallcart-pay">
        <div class="container">
            <div class="cart-pay">
                <div class="title">
                    <h3>03</h3>
                    <h3>付款方式</h3>
                </div>
            </div>
            <div class="cart-pay-choose">
                <div class="row">
                    <div class="ship-method col-12 col-md-6">
                        <label for="credit-card">
                            <input type="radio" id="credit-card" name="drone" value="credit-card" checked />
                            信用卡
                        </label>
                    </div>
                    <div class="ship-method col-12 col-md-6">
                        <label for="line-pay">
                            <input type="radio" id="line-pay" name="drone" value="line-pay" checked />
                            LINE PAY
                        </label>
                    </div>
                    <div class="ship-method col-12 col-md-6">
                        <label for="store-code">
                            <input type="radio" id="store-code" name="drone" value="store-code" checked />
                            超商代碼
                        </label>
                    </div>
                    <div class="ship-method col-12 col-md-6">
                        <label for="atm">
                            <input type="radio" id="atm" name="drone" value="atm" checked />
                            ATM轉帳
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="section section-confirm">
        <div class="container">
            <div class="cart-confirm">
                <div>
                    <input type="checkbox" id="scales" name="scales" checked />
                    <label for="scales">為保障彼此之權益,捐款一經送出即無法退款。在您完成捐款程序後,我們將視為您已確認並同意捐款金額無法退回。敬請在送出捐款前,仔細確認您欲捐款之金額及相關信息,一旦完成捐款流程,我們將無法為您辦理退款。您的每一筆善款都將被謹慎使用於海洋保護相關工作,感謝您的慷慨解囊與支持。若您對捐款使用有任何疑問,歡迎隨時與我們聯繫,我們將竭誠為您提供所需之資訊。</label>
                </div>
            </div>
        </div>
    </section>

    <section class="section section-confirm">
        <div class="container">
            <div class="cart-checkout">
                <button>我要結帳</button>
            </div>
        </div>
    </section>
</template>