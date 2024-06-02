<template>
  <section class="section section-profile">
    <div class="container container-profile">
      <div class="row">
        <div class="profile-box col-sm-12 col-md-4">
          <div class="avatra">
            <img id="image" ref="imageElement" :src="imageSrc" @error="imageLoaded = false">
            <input type="file" id="theFile" @change="fileChange" ref="fileInput">
            <p>Shark</p>
          </div>
  
          <div class="profile-button">
            <button class="btn wrap">會員資料修改</button>
            <button class="btn">密碼修改</button>
            <button class="btn">活動查詢</button>
            <button class="btn">活動分享</button>
            <button class="btn">訂單查詢</button>
            <button class="btn">捐款查詢</button>
            <button class="btn">商品收藏</button>
            <button class="btn">會員登出</button>
          </div>
        </div>
        <select name="pfl-pets" id="" class="profile-pets">
          <option value="0">會員資料修改</option>
          <option value="1">密碼修改</option>
          <option value="2">活動查詢</option>
          <option value="3">活動分享</option>
          <option value="4">訂單查詢</option>
          <option value="5">捐款查詢</option>
          <option value="6">會員登出</option>
        </select>
        <div class="profile-txt col-sm-12  col-md-8">
          <h1>會員專區</h1>
          <h2>會員資料修改</h2>
          <ul>
            <li>
              <label for="">會員姓名</label>
              <input type="text" name="" id="" maxlength="10" value="張曉明" readonly>
            </li>
            <li>
              <label for="">會員帳號</label>
              <input type="text" name="" id="" maxlength="10" value="abcd" readonly>
            </li>
            <li>
              <label for="">會員信箱</label>
              <input type="text" name="" id="" maxlength="50" value="abc@gmail.com" readonly>
            </li>
            <li>
              <label for="">會員電話</label>
              <input type="tel" name="" id="" maxlength="20" value="0912345678" readonly>
            </li>
            <li>
              <label for="">會員地址</label>
              <input type="text" name="" id="" value="302新竹縣竹北市嘉興路62號" readonly>
            </li>
            <li><button>儲存變更</button><button>取消變更</button></li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 商品資訊最後要放進div -->
    <div class="registration col-sm-8">
      <table class="shop">
        <tr>
          <th>商品編號</th>
          <th>商品名稱</th>
          <th>商品數量</th>
          <th>單價</th>
          <th>商品類別</th>
          <th>總價</th>
        </tr>
        <tr>
          <td>01</td>
          <td>側背包經典款-海星</td>
          <td>1</td>
          <td>NT$30,00</td>
          <td>上衣類</td>
          <td>NT$30,000</td>
        </tr>
        <tr>
          <td>02</td>
          <td>側背包經典款-企鵝</td>
          <td>2</td>
          <td>NT$35,00</td>
          <td>環保杯套袋</td>
          <td>NT$30,000</td>
        </tr>
        <tr>
          <td>03</td>
          <td>側背包經典款-北極熊</td>
          <td>1</td>
          <td>NT$7,00</td>
          <td>杯具類</td>
          <td>NT$30,000</td>
        </tr>
        <tr>
          <td>04</td>
          <td>側背包經典款-海龜</td>
          <td>2</td>
          <td>NT$15,00</td>
          <td>配件類</td>
          <td>NT$30,000</td>
        </tr>
        <tr>
          <td>05</td>
          <td>側背包經典款-鯨魚</td>
          <td>5</td>
          <td>NT$40,00</td>
          <td>杯具類</td>
          <td>NT$30,000</td>
        </tr>
      </table>
      <div class="button">
        <a href="">1</a>
        <a href="">2</a>
        <a href="">3</a>
        <a href="">4</a>
      </div>
    </div>
    <!-- 訂單資訊 -->
    <div class="registration col-sm-8">
      <table class="order">
        <tr>
          <th>訂單編號</th>
          <th>訂單狀況</th>
          <th>訂單日期</th>
          <th>訂購人資訊</th>
          <th>金額</th>
          <th>付款方式</th>
          <th>功能</th>
        </tr>
        <tr>
          <td>1001</td>
          <td>已出貨</td>
          <td>2024-05-15</td>
          <td>王小明, 0912345678</td>
          <td>NT$30,000</td>
          <td>信用卡</td>
          <td><button>取消訂單</button></td>
        </tr>
        <tr>
          <td>1002</td>
          <td>已出貨</td>
          <td>2024-05-16</td>
          <td>王小明, 0912345678</td>
          <td>NT$35,000</td>
          <td>銀行轉帳</td>
          <td><button>取消訂單</button></td>
        </tr>
        <tr>
          <td>1003</td>
          <td>未出貨</td>
          <td>2024-05-17</td>
          <td>王小明, 0912345678</td>
          <td>NT$7,000</td>
          <td>行動支付</td>
          <td><button class="cancel">完成訂單</button></td>
        </tr>
        <tr>
          <td>1004</td>
          <td>未出貨</td>
          <td>2024-05-18</td>
          <td>王小明, 0912345678</td>
          <td>NT$15,000</td>
          <td>信用卡</td>
          <td><button class="cancel">完成訂單</button></td>
        </tr>
        <tr>
          <td>1005</td>
          <td>未出貨</td>
          <td>2024-05-19</td>
          <td>王小明, 0912345678</td>
          <td>NT$40,000</td>
          <td>銀行轉帳</td>
          <td><button class="cancel">完成訂單</button></td>
        </tr>
      </table>
      <div class="button">
        <a href="">1</a>
        <a href="">2</a>
        <a href="">3</a>
        <a href="">4</a>
      </div>
    </div>
    <!-- 活動報名 -->
    <div class="registration col-sm-8">
      <table class="apply">
        <tr>
          <th>活動名稱</th>
          <th>活動日期</th>
          <th>截止日期</th>
          <th>地點</th>
          <th>會員名稱</th>
          <th>活動狀態</th>
          <th>功能</th>
        </tr>
        <tr>
          <td>淡水淨灘日</td>
          <td>2024-06-08</td>
          <td>2024-06-01</td>
          <td>台北市淡水海灘</td>
          <td>林小美</td>
          <td>已報名</td>
          <td><button>編輯留言</button></td>
        </tr>
        <tr>
          <td>高雄市夏季淨灘活動</td>
          <td>2024-07-15</td>
          <td>2024-07-10</td>
          <td>高雄市旗津海灘</td>
          <td>林小美</td>
          <td>已報名</td>
          <td><button>編輯留言</button></td>
        </tr>
        <tr>
          <td>宜蘭綠色環保行動</td>
          <td>2024-08-20</td>
          <td>2024-08-10</td>
          <td>宜蘭縣頭城鎮烏石港海灘</td>
          <td>林小美</td>
          <td>已結束</td>
          <td><button>活動分享</button></td>
        </tr>
        <tr>
          <td>台南市親子淨灘活動</td>
          <td>2024-09-05</td>
          <td>2024-08-20</td>
          <td>台南市安平區漁光島</td>
          <td>林小美</td>
          <td>已結束</td>
          <td><button>活動分享</button></td>
        </tr>
      </table>
      <div class="button">
        <a href="">1</a>
        <a href="">2</a>
        <a href="">3</a>
        <a href="">4</a>
      </div>
    </div>
    <!-- 收藏商品 -->
    <div class="registration col-sm-8">
      <table class="favorite">
        <tr>
          <th>商品編號</th>
          <th>商品名稱</th>
          <th>商品類別</th>
          <th>單價</th>
          <th>功能</th>
        </tr>
        <tr>
          <td>01</td>
          <td>側背包經典款-海星</td>
          <td>上衣類</td>
          <td>NT$30,00</td>
          <td><button>取消收藏</button></td>
        </tr>
        <tr>
          <td>02</td>
          <td>側背包經典款-企鵝</td>
          <td>環保杯套(袋)</td>
          <td>NT$30,00</td>
          <td><button>取消收藏</button></td>
        </tr>
        <tr>
          <td>03</td>
          <td>側背包經典款-北極熊</td>
          <td>杯具類</td>
          <td>NT$30,00</td>
          <td><button>取消收藏</button></td>
        </tr>
        <tr>
          <td>04</td>
          <td>側背包經典款-海龜</td>
          <td>配件類</td>
          <td>NT$30,00</td>
          <td><button>取消收藏</button></td>
        </tr>
      </table>
      <div class="button">
        <a href="">1</a>
        <a href="">2</a>
        <a href="">3</a>
        <a href="">4</a>
      </div>
    </div>
    <!-- 捐款查詢 -->
    <div class="registration col-sm-8">
      <table class="donate">
        <tr>
          <th>捐款人</th>
          <th>捐款日期</th>
          <th>捐款金額</th>
          <th>捐款方式</th>
        </tr>
        <tr>
          <td>張三</td>
          <td>2024年5月1日</td>
          <td>500元</td>
          <td>信用卡</td>
        </tr>
        <tr>
          <td>張三</td>
          <td>2024年5月3日</td>
          <td>1000元</td>
          <td>銀行轉帳</td>
        </tr>
        <tr>
          <td>張三</td>
          <td>2024年5月5日</td>
          <td>200元</td>
          <td>超商繳費</td>
        </tr>
        <tr>
          <td>張三</td>
          <td>2024年5月10日</td>
          <td>750元</td>
          <td>信用卡</td>
        </tr>
      </table>
      <div class="button">
        <a href="">1</a>
        <a href="">2</a>
        <a href="">3</a>
        <a href="">4</a>
      </div>
    </div>
    <div class="profile-revise col-sm-8">
      <h1>修改密碼</h1>
      <ul>
        <li>
          <label for="">密碼</label>
          <input type="text" name="" id="" maxlength="10" value="1234" readonly>
        </li>
        <li>
          <label>修改密碼</label>
          <input type="password" name="" id="" maxlength="10" placeholder="請輸入密碼">
        </li>
      </ul>
      <button>送出</button>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  setup() {
    const fileInput = ref(null)
    const imageElement = ref(null)
    const imageSrc = ref('')

    const fileChange = (event) => {
      const file = event.target.files[0]
      console.log(file)

      const reader = new FileReader()
      reader.readAsDataURL(file)

      reader.onload = () => {
        imageSrc.value = reader.result
      }
    }

    onMounted(() => {
      fileInput.value.addEventListener('change', fileChange)
    })

    return {
      fileInput,
      imageElement,
      imageSrc,
      fileChange,
      imageLoaded: true,
    }
  }
}
</script>