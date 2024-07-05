<template>
  <section class="section section-profile">
    <div class="container container-profile">
      <div class="row">
        <!-- 側邊欄 -->
        <div class="profile-box col-12 col-sm-4 col-md-3">
          <div class="avatra">
            <img v-if="member" :src="imageSrc" alt="User Avatar" id="image"/>
            <input type="file" id="theFile" @change="fileChange" ref="fileInput">
            <button @click="uploadImage">Upload</button>
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
            <RouterLink to="/Member">
              <button class="btn" @click="logout">會員登出</button>
            </RouterLink>
          </div>
        </div>
        <select name="pfl-pets" id="" class="profile-pets" v-model="selectedOption" @change="selectOption">
          <option value="profile" selected>會員資料修改</option>
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
              <input type="text" maxlength="20" v-model="member.U_NAME"
              @blur="validate('name')"
              readonly>
              <span v-if="errors.name">{{ errors.name }}</span>
            </li>
            <li>
              <label for="">會員帳號</label>
              <input type="text" maxlength="20" v-model="member.U_ACCOUNT" 
              @blur="validate('account')"
              readonly>
              <span v-if="errors.account">{{ errors.account }}</span>
            </li>
            <li>
              <label for="">會員信箱</label>
              <input type="text"  v-model="member.U_EMAIL" 
              @blur="validate('email')"
              readonly>
              <span v-if="errors.email">{{ errors.email }}</span>
            </li>
            <li>
              <label for="">會員電話</label>
              <input type="tel"  maxlength="10" v-model="member.U_PHONE" 
              @blur="validate('phone')"
              readonly>
              <span v-if="errors.phone">{{ errors.phone }}</span>
            </li>
            <li>
              <label for="">會員地址</label>
              <input type="text"  v-model="member.U_ADDRESS" 
              @blur="validate('address')"
              readonly>
              <span v-if="errors.address">{{ errors.address }}</span>
            </li>
          </ul>
          <div class="store">
            <button @click="editData">編輯資料</button>
            <button @click="saveData">儲存變更</button>
          </div>
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
            <!-- <p>{{ totalPages }}</p> 顯示總頁數 -->
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
              <input type="text" maxlength="10" v-model="member.U_PSW" readonly>
            </li>
            <li>
              <label>修改密碼</label>
              <input type="text" v-model="newPassword" maxlength="10" 
              placeholder="請輸入密碼" 
              @blur="validate('newPassword')">
              <span v-if="errors.newPassword">{{ errors.newPassword }}</span>
            </li>
            <li>
              <label>再輸入一次密碼</label>
              <input class="inputs" v-model="confirmPassword" type="text" maxlength="10" 
              placeholder="請輸入密碼"
              @blur="validate('confirmPassword')">
              <span v-if="errors.confirmPassword">{{ errors.confirmPassword }}</span>
            </li>
          </ul>
          <button type="button" @click="submitForm">送出</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, computed, onMounted, watch } from 'vue'
import { useMemeberStore } from '@/stores/member';
import {storeToRefs} from 'pinia'
import { useValidationStore } from '@/stores/validation'
import axios from 'axios';
import Swal from 'sweetalert2';
export default {
  setup() {
    const imageHostUrl = import.meta.env.VITE_IMAGE_URL
    const store = useMemeberStore();
    const { member } = storeToRefs(store)
    
    const imageSrc = ref(''); // Initial image source
    const fileInput = ref(null);
    const currentSection = ref('profile');
    const selectedOption = ref('profile');

    const donates = ref([]);
    const currentPage = ref(1);
    const perPage = 10;
    const activities = ref([]);
    const favorites = ref([]);
    const order = ref([]);
    const shoplists = ref([]);

    const isShopTableVisible = ref(false);
    const currentPoId = ref('')
    //修改密碼驗證
    const validationStore  = useValidationStore();
    const { errors, validateField, clearErrors } = validationStore;
    const newPassword = ref('');
    const confirmPassword = ref('');
    //會員資料修改
    const validAll = () => {
      clearErrors();
      validateField('name', { name: member.value.U_NAME });
      validateField('account', { account: member.value.U_ACCOUNT });
      validateField('email', { email: member.value.U_EMAIL });
      validateField('phone', { phone: member.value.U_PHONE });
      validateField('address', { address: member.value.U_ADDRESS });
    };
    //會員資料表單修改
    const saveData = async () => {
      validAll();
      console.log('Errors:', errors);
      if (Object.keys(errors).length > 0) {
        // 如果存在錯誤訊息，就不送出表單，直接返回
        return;
      }
        try {
      const response = await axios.post('http://localhost/cid101/g1/api/memberUpdate.php', member.value, {
        headers: {
          'Content-Type': 'application/json' 
        }
      });
          if (response.data.status === 'success') {
            //如果請求成功，調用 store.updateMember 方法來更新前端的會員資料
            store.updateMember(member.value);
            //將所有表單中的 input 元素設置為只讀，防止用戶在成功更新後修改資料。
            document.querySelectorAll('input').forEach(input => input.setAttribute('readonly', true));
            Swal.fire({
              icon: 'success',
              title: '成功',
              text: '會員資料已更新',
              confirmButtonText: '確認'
            });
          } else {
            Swal.fire({
              icon: 'error',
              title: '錯誤',
              text: response.data.message,
              confirmButtonText: '確認'
            });
          }
        } catch (error) {
          Swal.fire({
            icon: 'error',
            title: '錯誤',
            text: '發生錯誤，請稍後再試',
            confirmButtonText: '確認'
          });
        }
    };

    //顯示修改密碼錯誤資訊
    const validate = () => {
      clearErrors();
      validateField('newPassword', { newPassword: newPassword.value });
      validateField('confirmPassword', { newPassword: newPassword.value, confirmPassword: confirmPassword.value });

    };
    const submitForm = async () => {
      validate(); // 執行驗證

      // 檢查是否有錯誤
      if (Object.keys(errors).length > 0) {
        return; // 如果有錯誤，阻止提交
      }

      try {
        // 提交表單數據到 PHP 後端
        const response = await axios.post('http://localhost/cid101/g1/api/memberChange.php', {
          newPassword: newPassword.value,
          confirmPassword: confirmPassword.value,
          account: member.value.U_ACCOUNT
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        });

        // 在這裡處理成功後的邏輯，比如重置表單、顯示成功消息等
        store.updateMember({
          U_PSW: newPassword.value, // 更新密碼
          // 可以添加更多需要更新的屬性
        });
        newPassword.value = '';
        confirmPassword.value = '';
        
        Swal.fire({
          icon: 'success',
          title: '成功',
          text: response.data.message
        });
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: '系統錯誤',
          text: '系統錯誤，請稍後再試'
        });
      }
    };

    const editData = () => {
      // 移除所有 會員資料readonly 屬性
      document.querySelectorAll('input').forEach(input => input.removeAttribute('readonly'));
    };
    //生命週期
    onMounted(() => {
      // 根據會員資料設置頭像
      if (member.value && member.value.U_AVATAR) {
        imageSrc.value = `${imageHostUrl}/${member.value.U_AVATAR}`;
      } else {
        imageSrc.value = `${imageHostUrl}/member15.jpg`; // 預設圖片
      }
    })

    // 處理文件選擇和圖片預覽
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

    // 處理圖片上傳
    const uploadImage = async () => {
      const file = fileInput.value.files[0];
      const uId = store.member.U_ID;
      if (file) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('U_ID', uId);
        try {
          const response = await axios.post('http://localhost/cid101/g1/api/memberUpload.php', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });

          if (response.data.error === false) {
            Swal.fire('成功', '圖片上傳成功', 'success');
            // 更新圖片源
            const newAvatar = response.data.fileName;
            imageSrc.value = `${imageHostUrl}/${newAvatar}`;
            store.updateMember({ U_AVATAR: newAvatar });
          } else {
            Swal.fire('錯誤', response.data.message, 'error');
          }
        } catch (error) {
          Swal.fire('錯誤', '上傳過程中發生錯誤', 'error');
        }
      }
    };

    //處理登出
    const logout = () => {
      store.logout();
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
      } else if (currentSection.value === 'orders') {
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
      imageHostUrl,//圖片路徑
      fileInput,//讀取圖片檔案
      imageSrc,//預設圖片
      fileChange,//圖片切換
      uploadImage,//上傳圖片
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
      newPassword,//新密碼
      confirmPassword,//再輸入一次密碼
      errors,//pinia錯誤訊息
      validate,//修改密碼錯誤訊息
      clearErrors,//清理錯誤訊息
      submitForm,//送出密碼變更
      editData,//移除所有 readonly 屬性
      saveData//送出會員資料變更
    }
  }
}
</script>