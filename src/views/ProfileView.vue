<template>
  <section class="section section-profile">
    <div class="container container-profile">
      <div class="row">
        <div class="profile-box col-12 col-sm-4 col-md-3">
          <div class="avatra">
            <img :src="imageSrc" alt="User Avatar" id="image" />
            <input type="file" id="theFile" @change="fileChange" ref="fileIn put">
            <button>Upload</button>
            <p>{{ member?.U_NAME }}</p>
            <RouterLink to="/Member">
              <button class=" logouts" @click="logout">會員登出</button>
            </RouterLink>
          </div>

          <div class="profile-button">
            <button class="btn" @click="changeSection('profile')">會員資料修改</button>
            <button class="btn" @click="changeSection('password')">密碼修改</button>
            <button class="btn" @click="changeSection('activity')">活動查詢</button>
            <button class="btn" @click="changeSection('orders')">訂單查詢</button>
            <button class="btn" @click="changeSection('donations')">捐款查詢</button>
            <button class="btn" @click="changeSection('favorites')">商品收藏</button>
            <RouterLink to="/Member"><button class="btn" @click="logout">會員登出</button></RouterLink>
          </div>
        </div>
        <select name="pfl-pets" id="" class="profile-pets" v-model="selectedOption" @change="selectOption">
          <option value="profile">會員資料修改</option>
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
              <input type="text" name="" id="" maxlength="20" v-model="member.U_NAME">
            </li>
            <li>
              <label for="">會員帳號</label>
              <input type="text" name="" id="" maxlength="20" v-model="member.U_ACCOUNT">
            </li>
            <li>
              <label for="">會員信箱</label>
              <input type="text" name="" id="" v-model="member.U_EMAIL">
            </li>
            <li>
              <label for="">會員電話</label>
              <input type="tel" name="" id="" maxlength="10" v-model="member.U_PHONE">
            </li>
            <li>
              <label for="">會員地址</label>
              <input type="text" name="" id="" v-model="member.U_ADDRESS">
            </li>
          </ul>
          <div class="store"><button>儲存變更</button><button>取消變更</button></div>
        </div>

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
                <th colspan="2">功能</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="list in paginatedData" :key="list.PO_ID">
                <tr>
                  <td data-label="訂單編號">{{ list.PO_ID }}</td>
                  <td data-label="訂單狀況">{{ list.S_STATUS }}</td>
                  <td data-label="訂單日期">{{ list.PO_DATE }}</td>
                  <td data-label="總金額">{{ list.PO_AMOUNT }} </td>
                  <td data-label="付款方式">{{ list.PO_ORDER }}</td>
                  <td><button class="view" @click="toggleShopTable(list.PO_ID)">{{ list.VIEW }}</button></td>
                  <td data-label="功能"><button>{{ list.ORDER_BUTTON }}</button></td>
                </tr>
                <!-- 商品資訊最後要放進div做成toggle -->
                <!--currentPoId的值等於list.PO_ID 和 isShopTableVisible開啟的狀態 -->
                <div v-if="currentPoId === `${list.PO_ID}` && isShopTableVisible"
                  class="shoptable">
                  <table class="shop">
                    <caption>訂單明細</caption>
                    <tr>
                      <th>商品編號</th>
                      <th>商品名稱</th>
                      <th>商品數量</th>
                      <th>單價</th>
                    </tr>
                    <tr v-for="shops in filteredShoplists" :key="shops.PO_ID">
                      <td data-label="商品編號">{{ shops.P_ID }}</td>
                      <td data-label="商品名稱">{{ shops.P_NAME }}</td>
                      <td data-label="商品數量">{{ shops.PO_QTY }}</td>
                      <td data-label="單價">{{ shops.PO_PRICE }}</td>
                    </tr>
                  </table>
                  <button @click="toggleShopTable()">關閉</button>
                </div>
              </template>
            </tbody>
          </table>
          <div class="button">
            <a href="#" v-for="pageNum in totalPages" :key="pageNum" @click.prevent="goToPage(pageNum)"
              :class="{ active: pageNum === currentPage }">{{ pageNum }}</a>
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
              <tr v-for=" act in paginatedData" :key="act.E_ID">
                <td data-label="活動訂單">{{ act.E_ID }}</td>
                <td data-label="活動名稱">{{ act.E_TITLE }}</td>
                <td data-label="活動日期">{{ act.E_DATE }}</td>
                <td data-label="截止日期">{{ act.E_DEADLINE }}</td>
                <td data-label="地點">{{ act.E_ADDRESS }}</td>
                <td data-label="活動狀態">{{ act.E_STATUS }}</td>
                <td data-label="功能"><button>{{ act.EO_status }}
                    {{ act.F_ID }}</button></td>
              </tr>
            </tbody>
          </table>
          <div class="button">
            <a href="#" v-for="pageNum in totalPages" :key="pageNum" @click.prevent="goToPage(pageNum)"
              :class="{ active: pageNum === currentPage }">{{ pageNum }}</a>
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
              <tr v-for=" love in paginatedData" :key="love.P_ID">
                <td data-label="商品編號">{{ love.P_ID }}</td>
                <td data-label="商品名稱">{{ love.P_NAME }}</td>
                <td data-label="商品類別">{{ love.PS_ID }}</td>
                <td data-label="單價">{{ love.P_PRICE }}</td>
                <td data-label="功能"><button>{{ love.collect }}</button></td>
              </tr>
            </tbody>
          </table>
          <div class="button">
            <a href="#" v-for="pageNum in totalPages" :key="pageNum" @click.prevent="goToPage(pageNum)"
              :class="{ active: pageNum === currentPage }">{{ pageNum }}</a>
          </div>
        </div>
        <!-- 捐款查詢 -->
        <div class="registration col-12 col-sm-8  col-md-8" v-else-if="currentSection === 'donations'">
          <table class="donate">
            <caption>捐款查詢</caption>
            <thead>
              <tr>
                <th>捐款訂單</th>
                <th>捐款日期</th>
                <th>捐款金額</th>
                <th>捐款方式</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for=" donate in paginatedData" :key="donate.DO_ID">
                <td data-label="捐款訂單">{{ donate.DO_ID }}</td>
                <td data-label="捐款日期">{{ donate.DO_DATE }}</td>
                <td data-label="捐款金額">{{ donate.DO_AMOUNT }}</td>
                <td data-label="捐款方式">{{ donate.PM_NAME }}</td>
              </tr>
            </tbody>
          </table>
          <div class="button">
            <a href="#" v-for="pageNum in totalPages" :key="pageNum" @click.prevent="goToPage(pageNum)"
              :class="{ active: pageNum === currentPage }">{{ pageNum }}</a>
          </div>
        </div>
        <div class="profile-revise col-12 col-sm-8  col-md-8" v-else-if="currentSection === 'password'">
          <h1>修改密碼</h1>
          <ul>
            <li>
              <label for="">會員密碼</label>
              <input type="text" name="" id="" maxlength="10" v-model="member.U_PSW" readonly>
            </li>
            <li>
              <label>修改密碼</label>
              <input type="password" name="" id="" maxlength="10" placeholder="請輸入密碼">
            </li>
            <li>
              <label>再輸入一次密碼</label>
              <input class="inputs" type="password" name="" id="" maxlength="10" placeholder="請輸入密碼">
            </li>
          </ul>
          <button>送出</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { store, fetchProfile, logout as logoutStore } from '@/store.js';
import { ref, computed, onMounted, watch } from 'vue'
fetchProfile()

export default {
  setup() {
    const member = computed(() => store.member);
    const imageSrc = ref(member.value?.U_AVATAR); // Initial image source
    const fileInput = ref(null);
    const currentSection = ref('profile');
    const selectedOption = ref('')

    const donates = ref([]);
    const currentPage = ref(1);
    const perPage = 10;
    const activities = ref([]);
    const favorites = ref([]);
    const order = ref([]);
    const shoplists = ref([]);

    const isShopTableVisible = ref(false);
    const currentPoId = ref('')

    const fileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          imageSrc.value = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    };
    const logout = () => {
      logoutStore();
    }


    const changeSection = (section) => {
      currentSection.value = section
    }
    const selectOption = () => {
      changeSection(selectedOption.value)
    }

    onMounted(async () => {
      try {
        // 使用 Promise.all 来并行获取多个 JSON 数据
        const responses = await Promise.all([
          fetch(`${import.meta.env.BASE_URL}json/donatemoney.json`),
          fetch(`${import.meta.env.BASE_URL}json/activities.json`),
          fetch(`${import.meta.env.BASE_URL}json/favorite.json`),
          fetch(`${import.meta.env.BASE_URL}json/orders.json`),
          fetch(`${import.meta.env.BASE_URL}json/shoplist.json`),

        ]);
        // 檢查每個響應的狀態
        const jsonDatas = await Promise.all(responses.map(async (response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        }));

        // 將每個 JSON 資料整合到一個數組中，或根據需要進行其他處理
        donates.value = jsonDatas[0];
        activities.value = jsonDatas[1];
        favorites.value = jsonDatas[2];
        order.value = jsonDatas[3];
        shoplists.value = jsonDatas[4];
      } catch (error) {
        console.error('Failed to fetch donation data:', error);
      }
    });

    const totalPages = computed(() => {
      let dataLength = 0;
      if (currentSection.value === 'donations') {
        dataLength = donates.value.length;
      } else if (currentSection.value === 'activity') {
        dataLength = activities.value.length;
      } else if (currentSection.value === 'favorites') {
        dataLength = favorites.value.length;
      } else if (currentSection.value === 'order') {
        dataLength = order.value.length;
      }
      return Math.ceil(dataLength / perPage);
    });

    const paginatedData = computed(() => {
      let data = [];
      if (currentSection.value === 'donations') {
        data = donates.value;
      } else if (currentSection.value === 'activity') {
        data = activities.value;
      } else if (currentSection.value === 'favorites') {
        data = favorites.value;
      } else if (currentSection.value === 'orders') {
        data = order.value;
      }
      const startIndex = (currentPage.value - 1) * perPage;
      const endIndex = startIndex + perPage;
      return data.slice(startIndex, endIndex);
    });

    const goToPage = (page) => {
      if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
      }
    };
    

    //顯示清單明細 
    const filteredShoplists = computed(() => {
      if (!currentPoId.value) return [];
      return shoplists.value.filter(shop => shop.PO_ID === currentPoId.value);
    });


    const toggleShopTable = (poId) => {
      if (!poId) {
        isShopTableVisible.value = false
        return
      }

      if (currentPoId.value === `${poId}`) {
        isShopTableVisible.value = false
      } else {
        currentPoId.value = `${poId}`;
        isShopTableVisible.value = true;
      }
    };

    watch(isShopTableVisible, (isOpen) => {
      if (!isOpen) {
        currentPoId.value = ''
      }
    })

    return {
      fileInput,
      imageSrc,
      fileChange,
      imageLoaded: true,
      currentSection,
      changeSection,
      selectedOption,
      selectOption,
      logout,
      member,
      donates,
      activities,
      favorites,
      order,
      shoplists,
      currentPage,
      totalPages,
      paginatedData,
      goToPage,
      isShopTableVisible,
      currentPoId,
      toggleShopTable,
      filteredShoplists,
    }
  }
}
</script>