<template>
  <section class="section section-profile">
    <div class="container container-profile">
      <div class="row">
        <div class="profile-box col-12 col-sm-4 col-md-3">
          <div class="avatra">
            <img id="image" ref="imageElement" :src="imageSrc" @error="imageLoaded = false">
            <input type="file" id="theFile" @change="fileChange" ref="fileInput">
            <button>Upload</button>
            <p>Shark</p>
            <RouterLink to="/Member">
              <button class=" logout">會員登出</button>
            </RouterLink>
          </div>

          <div class="profile-button">
            <button class="btn" @click="changeSection('profile')">會員資料修改</button>
            <button class="btn" @click="changeSection('password')">密碼修改</button>
            <button class="btn" @click="changeSection('activity')">活動查詢</button>
            <button class="btn" @click="changeSection('orders')">訂單查詢</button>
            <button class="btn" @click="changeSection('donations')">捐款查詢</button>
            <button class="btn" @click="changeSection('favorites')">商品收藏</button>
            <RouterLink to="/Member"><button class="btn">會員登出</button></RouterLink>
          </div>
        </div>
        <select name="pfl-pets" id="" class="profile-pets"
        v-model="selectedOption"
        @change="selectOption"
        >
          <option value="profile" >會員資料修改</option>
          <option value="password">密碼修改</option>
          <option value="activity">活動查詢</option>
          <option value="orders">訂單查詢</option>
          <option value="donations">捐款查詢</option>
        </select>
        <div class="profile-txt col-12 col-sm-8  col-md-8" v-if="currentSection === 'profile'">
          <h1>會員專區</h1>
          <h2>會員資料修改</h2>
          <ul>
            <li>
              <label for="">會員姓名</label>
              <input type="text" name="" id="" maxlength="20" value="張曉明" readonly>
            </li>
            <li>
              <label for="">會員帳號</label>
              <input type="text" name="" id="" maxlength="20" value="abcd" readonly>
            </li>
            <li>
              <label for="">會員信箱</label>
              <input type="text" name="" id="" value="abc@gmail.com" readonly>
            </li>
            <li>
              <label for="">會員電話</label>
              <input type="tel" name="" id="" maxlength="10" value="0912345678" readonly>
            </li>
            <li>
              <label for="">會員地址</label>
              <input type="text" name="" id="" value="302新竹縣竹北市嘉興路62號" readonly>
            </li>
            <li>
              <label for="">會員頭像</label>
              <input type="file" name="" id="" value="">
            </li>
          </ul>
          <div class="store"><button>儲存變更</button><button>取消變更</button></div>
        </div>
        <!-- 商品資訊最後要放進div做成toggle -->
        <!-- <div class="registration col-12 col-sm-8 col-md-8">
      <table class="shop">
        <caption>商品資訊</caption>
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
    </div> -->

        <!-- 訂單資訊 -->
        <div class="registration col-12 col-sm-8 col-md-8" v-else-if="currentSection === 'orders'">
          <table class="order">
            <caption>訂單查詢</caption>
            <thead>
            <tr>
              <th>訂單編號</th>
              <th>訂單狀況</th>
              <th>訂單日期</th>
              <th>總金額</th>
              <th>付款方式</th>
              <th colspan=2>功能</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="訂單編號">1001</td>
              <td data-label="訂單狀況">已出貨</td>
              <td data-label="訂單日期">2024-05-15</td>
              <td data-label="總金額">NT$30,000 </td>
              <td data-label="付款方式">信用卡</td>
              <td data-label="功能"><button>取消訂單</button></td>
              <td><button class="view">檢視</button></td>
            </tr>
            <tr>
              <td data-label="訂單編號">1002</td>
              <td data-label="訂單狀況">已出貨</td>
              <td data-label="訂單日期">2024-05-16</td>
              <td data-label="總金額">NT$35,000</td>
              <td data-label="付款方式">銀行轉帳</td>
              <td data-label="功能"><button >取消訂單</button></td>
              <td><button class="view">檢視</button></td>
            </tr>
            <tr>
              <td data-label="訂單編號">1003</td>
              <td data-label="訂單狀況">未出貨</td>
              <td data-label="訂單日期">2024-05-17</td>
              <td data-label="總金額">NT$7,000</td>
              <td data-label="付款方式">行動支付</td>
              <td data-label="功能"><button class="cancel">完成訂單</button></td>
              <td><button class="view">檢視</button></td>
            </tr>
            <tr>
              <td data-label="訂單編號">1004</td>
              <td data-label="訂單狀況">未出貨</td>
              <td data-label="訂單日期">2024-05-18</td>
              <td  data-label="總金額">NT$15,000</td>
              <td data-label="付款方式">信用卡</td>
              <td data-label="功能"><button class="cancel">完成訂單</button></td>
              <td><button class="view">檢視</button></td>
            </tr>
            <tr>
              <td data-label="訂單編號">1005</td>
              <td data-label="訂單狀況">未出貨</td>
              <td data-label="訂單日期">2024-05-19</td>
              <td data-label="總金額">NT$40,000</td>
              <td data-label="付款方式">銀行轉帳</td>
              <td data-label="功能"><button class="cancel">完成訂單</button></td>
              <td><button class="view">檢視</button></td>
            </tr>
          </tbody>
          </table>
          <div class="button">
            <a href="">1</a>
            <a href="">2</a>
            <a href="">3</a>
            <a href="">4</a>
          </div>
        </div>
        <!-- 活動查詢 -->
        <div class="registration col-12 col-sm-8  col-md-8" v-else-if="currentSection === 'activity'">
          <table class="apply">
            <caption>活動報名</caption>
            <thead>
            <tr>
              <th>活動訂單</th>
              <th>活動名稱</th>
              <th>活動日期</th>
              <th>截止日期</th>
              <th>地點</th>
              <th>活動狀態</th>
              <th>功能</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="活動訂單">1001</td>
              <td data-label="活動名稱">淡水淨灘日</td>
              <td data-label="活動日期">2024-06-08</td>
              <td data-label="截止日期">2024-06-01</td>
              <td data-label="地點">台北市淡水海灘</td>
              <td data-label="活動狀態">已報名</td>
              <td data-label="功能"><button>取消報名</button></td>
            </tr>
            <tr>
              <td data-label="活動訂單">1002</td>
              <td data-label="活動名稱">高雄市夏季淨灘活動</td>
              <td data-label="活動日期">2024-07-15</td>
              <td data-label="截止日期">2024-07-10</td>
              <td data-label="地點">高雄市旗津海灘</td>
              <td data-label="活動狀態">已報名</td>
              <td data-label="功能"><button>取消報名</button></td>
            </tr>
            <tr>
              <td data-label="活動訂單">1003</td>
              <td data-label="活動名稱">宜蘭綠色環保行動</td>
              <td data-label="活動日期">2024-08-20</td>
              <td data-label="截止日期">2024-08-10</td>
              <td data-label="地點">宜蘭縣頭城鎮烏石港海灘</td>
              <td data-label="活動狀態">已結束</td>
              <td><button data-label="功能">活動分享</button></td>
            </tr>
            <tr>
              <td data-label="活動訂單">1004</td>
              <td data-label="活動名稱">台南市親子淨灘活動</td>
              <td data-label="活動日期">2024-09-05</td>
              <td data-label="截止日期">2024-08-20</td>
              <td data-label="地點">台南市安平區漁光島</td>
              <td data-label="活動狀態">已留言</td>
              <td><button data-label="功能">編輯留言</button></td>
            </tr>
          </tbody>
          </table>
          <div class="button">
            <a href="">1</a>
            <a href="">2</a>
            <a href="">3</a>
            <a href="">4</a>
          </div>
        </div>
        <!-- 收藏商品 -->
        <div class="registration col-12 col-sm-8  col-md-8" v-else-if="currentSection === 'favorites'">
          <table class="favorite">
            <caption>收藏商品</caption>
            <thead>
            <tr>
              <th>商品編號</th>
              <th>商品名稱</th>
              <th>商品類別</th>
              <th>單價</th>
              <th>功能</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="商品編號">01</td>
              <td data-label="商品名稱">側背包經典款-海星</td>
              <td data-label="商品類別">上衣類</td>
              <td data-label="單價">NT$30,00</td>
              <td data-label="功能"><button>取消收藏</button></td>
            </tr>
            <tr>
              <td data-label="商品名稱">02</td>
              <td data-label="商品編號">側背包經典款-企鵝</td>
              <td data-label="商品類別">環保杯套(袋)</td>
              <td data-label="單價">NT$30,00</td>
              <td data-label="功能"><button>取消收藏</button></td>
            </tr>
            <tr>
              <td data-label="商品名稱">03</td>
              <td data-label="商品編號">側背包經典款-北極熊</td>
              <td data-label="商品類別">杯具類</td>
              <td data-label="單價">NT$30,00</td>
              <td data-label="功能"><button>取消收藏</button></td>
            </tr>
            <tr>
              <td data-label="商品名稱">04</td>
              <td data-label="商品編號">側背包經典款-海龜</td>
              <td data-label="商品類別">配件類</td>
              <td data-label="單價">NT$30,00</td>
              <td data-label="功能"><button>取消收藏</button></td>
            </tr>
          </tbody>
          </table>
          <div class="button">
            <a href="">1</a>
            <a href="">2</a>
            <a href="">3</a>
            <a href="">4</a>
          </div>
        </div>
        <!-- 捐款查詢 -->
        <div class="registration col-12 col-sm-8  col-md-8" v-else-if="currentSection === 'donations'">
          <table class="donate">
            <caption>捐款查詢</caption>
            <thead>
            <tr>
              <th>捐款人</th>
              <th>捐款日期</th>
              <th>捐款金額</th>
              <th>捐款方式</th>
            </tr>
          </thead>
          <tbody>
            <tr>
        <td data-label="捐款人">張三</td>
        <td data-label="捐款日期">2024年5月1日</td>
        <td data-label="捐款金額">500元</td>
        <td data-label="捐款方式">信用卡</td>
      </tr>
      <tr>
        <td data-label="捐款人">張三</td>
        <td data-label="捐款日期">2024年5月3日</td>
        <td data-label="捐款金額">1000元</td>
        <td data-label="捐款方式">銀行轉帳</td>
      </tr>
      <tr>
        <td data-label="捐款人">張三</td>
        <td data-label="捐款日期">2024年5月5日</td>
        <td data-label="捐款金額">200元</td>
        <td data-label="捐款方式">超商繳費</td>
      </tr>
      <tr>
        <td data-label="捐款人">張三</td>
        <td data-label="捐款日期">2024年5月10日</td>
        <td data-label="捐款金額">750元</td>
        <td data-label="捐款方式">信用卡</td>
      </tr>
</tbody>
          </table>
          <div class="button">
            <a href="">1</a>
            <a href="">2</a>
            <a href="">3</a>
            <a href="">4</a>
          </div>
        </div>
        <div class="profile-revise col-12 col-sm-8  col-md-8" v-else-if="currentSection === 'password'">
          <h1>修改密碼</h1>
          <ul>
            <li>
              <label for="">會員密碼</label>
              <input type="text" name="" id="" maxlength="10" value="1234" readonly>
            </li>
            <li>
              <label>修改密碼</label>
              <input type="password" name="" id="" maxlength="10" placeholder="請輸入密碼">
            </li>
          </ul>
          <button>送出</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted} from 'vue'
export default {
  setup() {
    const fileInput = ref(null)
    const imageElement = ref(null)
    const imageSrc = ref('')
    //會員按鈕切換
    const currentSection = ref('profile')

    const selectedOption = ref('') 
    
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
    const changeSection = (section) => {
      currentSection.value = section
    }
    const selectOption = () => {
      changeSection(selectedOption.value)
    }
    

    return {
      fileInput,
      imageElement,
      imageSrc,
      fileChange,
      imageLoaded: true,
      currentSection,
      changeSection,
      selectedOption,
      selectOption
    }
  }
}
</script>