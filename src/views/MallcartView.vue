<template>
    <section class="section section-mallcart-cart">
        <div class="container">
            <div class="cart-wrap">
                <div class="title">
                    <h3>01</h3>
                    <h3>購物車內容</h3>
                </div>
                <div class="project">
                    <h3>項目</h3>
                    <h3>商品資料</h3>
                    <h3>價格</h3>
                    <h3>數量</h3>
                    <h3>小計</h3>
                </div>
            </div>
            <div class="cart-info">
                <div class="item">
                    <h3>1</h3>
                </div>
                <div class="pic">
                    <img src="../../public/img/mallcart/01.png" alt="">
                    <h4>【側背包經典款-鯨魚】</h4>
                </div>
                <div class="price">
                    <h4>NT$ 520</h4>
                </div>
                <div class="amount">
                    <button>-</button> 
                    <span>1</span> 
                    <button>+</button>
                </div>
                <div class="subtotal">
                    <h4>NT$ 520</h4>
                </div>
                <div class="delete">
                    <a href="">✖</a>
                </div>
            </div>
            <div class="cart-info2">
                <div class="item">
                    <h3>2</h3>
                </div>
                <div class="pic">
                    <img src="../../public/img/mallcart/02.png" alt="">
                    <h4>【飲料杯套經典款-企鵝】</h4>
                </div>
                <div class="price">
                    <h4>NT$ 120</h4>
                </div>
                <div class="amount">
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                </div>
                <div class="subtotal">
                    <h4>NT$ 120</h4>
                </div>
                <div class="delete">
                    <a href="">✖</a>
                </div>
            </div>
            <div class="cart-price">
                <div class="text">
                    <h3>訂單金額 NT$640</h3>
                    <h3>運費 +NT$60</h3>
                </div>
            </div>
            <div class="cart-total">
                <div class="text">
                    <h3>應付金額 NT$ 700</h3>
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

    <section class="section section-mallcart-ship">
        <div class="container">
            <div class="cart-ship">
                <div class="title">
                    <h3>03</h3>
                    <h3>運送方式</h3>
                </div>
            </div>
            <div class="cart-ship-choose">
                <div>
                    <input type="radio" id="huey" name="drone" value="huey" checked />
                    <label for="huey">宅配</label>
                </div>
                <div>
                    <input type="radio" id="huey" name="drone" value="huey" checked />
                    <label for="huey">7-11門市取件(中壢門市)</label>
                </div>
                <div>
                    <input type="radio" id="huey" name="drone" value="huey" checked />
                    <label for="huey">全家門市取件(中壢門市)</label>
                </div>
                <div>
                    <input type="radio" id="huey" name="drone" value="huey" checked />
                    <label for="huey">萊爾富門市取件(中壢門市)</label>
                </div>
            </div>    
        </div>
    </section>

    <section class="section section-mallcart-receiver">
        <div class="container">
            <div class="cart-receive">
                <div class="title">
                    <h3>04</h3>
                    <h3>收件人資料 ☐同會員資料</h3>
                </div>
            </div>
            <div class="cart-receiveinfo">
                <div class="name">
                    <h4>收件人姓名</h4>
                    <input type="text" id="name" name="name"/>
                </div>
                <div class="phone">
                    <h4>收件人聯絡電話</h4>
                    <input type="text" id="name" name="name"/>
                </div>
                <div class="add">
                    <h4>收件人地址</h4>
                    <input type="text" id="name" name="name">
                </div>
            </div>
        </div>
    </section>
    
    <section class="section section-mallcart-pay">
        <div class="container">
            <div class="cart-pay">
                <div class="title">
                    <h3>05</h3>
                    <h3>付款方式</h3>
                </div>
            </div>
            <div class="cart-pay-choose">
                <div>
                    <input type="radio" id="huey" name="drone" value="huey" checked />
                    <label for="huey">信用卡</label>
                </div>
                <div>
                    <input type="radio" id="huey" name="drone" value="huey" checked />
                    <label for="huey">LINE PAY</label>
                </div>
                <div>
                    <input type="radio" id="huey" name="drone" value="huey" checked />
                    <label for="huey">超商代碼</label>
                </div>
                <div>
                    <input type="radio" id="huey" name="drone" value="huey" checked />
                    <label for="huey">ATM轉帳</label>
                </div>
            </div>
        </div>
    </section>
    
    <section class="section section-confirm">
        <div class="container">
            <div class="cart-confirm">
                <div>
                    <input type="checkbox" id="scales" name="scales" checked />
                    <label for="scales">為保障彼此之權益，賣家在收到您的訂單後仍保有是否接受訂單及出貨與否之權利。</label>
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