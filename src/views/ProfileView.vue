<template>
  <section class="section section-profile">
    <div class="container container-profile">
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
            <input type="text" name="" id="" value="張曉明">
          </li>
          <li>
            <label for="">會員帳號</label>
            <input type="text" name="" id="" value="abcd">
          </li>
          <li>
            <label for="">會員信箱</label>
            <input type="text" name="" id="" value="abc@gmail.com">
          </li>
          <li>
            <label for="">會員電話</label>
            <input type="tel" name="" id="" value="0912345678">
          </li>
          <li>
            <label for="">會員地址</label>
            <input type="text" name="" id="" value="302新竹縣竹北市嘉興路62號">
          </li>
          <li><button>儲存變更</button><button>取消變更</button></li>
        </ul>
      </div>

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