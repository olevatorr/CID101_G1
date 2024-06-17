<!-- <template>
    <div v-if="show" class="lightbox-overlay">
        <div class="lightbox-content">
            <h2>捐款成功</h2>
            <p>感謝您對海洋資源的保護，為未來世代留下了寶貴的襲產。您的智慧和付出，讓我們能夠更好地理解和利用海洋資源，同時保護海洋生命的多樣性和穩定性，為後人留下了寶貴的遺產。</p>

            <div class="donation-certificate">
                <img src="../../../public/img/LOGO-white.png" alt="BLUE ALERT Logo" class="logo">
                <h3>捐款證書</h3>
                <table>
                    <tr>
                        <td>捐款編號:</td>
                        <td>{{ donationId }}</td>
                    </tr>
                    <tr>
                        <td>捐款姓名:</td>
                        <td>{{ store.member.U_NAME }}</td>
                    </tr>
                    <tr>
                        <td>捐款金額:</td>
                        <td>{{ donationAmount }}元</td>
                    </tr>
                    <tr>
                        <td>捐款日期:</td>
                        <td>{{ donationDate }}<< /td>
                    </tr>
                    <tr>
                        <td>社福財團法人:</td>
                        <td>{{ donationInfo.organization }}</td>
                    </tr>
                    <tr>
                        <td>捐款用途:</td>
                        <td>{{ donationInfo.purpose }}</td>
                    </tr>
                </table>

                <div class="seal">
                    <img src="../../../public/img/LOGO-white.png" alt="Official Seal">
                </div>

                <p>財團法人：{{ donationInfo.organization }}</p>
            </div>

            <button @click="closeLightbox" class="close-button">下載並至首頁</button>
        </div>
    </div>
</template> -->

<!-- <script>
export default {
    props: {
        show: Boolean,
        donationInfo: Object,
    },
    emits: ['close'],
    methods: {
        closeLightbox() {
            this.$emit('close');
        },
    },
}
</script> -->

<!-- <style scoped>
.lightbox-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.lightbox-content {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    max-width: 80%;
    max-height: 80%;
    overflow-y: auto;
}

.donation-certificate {
    border: 1px solid #ccc;
    padding: 2rem;
    margin: 2rem 0;
    position: relative;
}

.logo {
    max-width: 150px;
    margin-bottom: 1rem;
}

table {
    width: 100%;
    margin: 1rem 0;
}

td {
    padding: 0.5rem;
}

.seal {
    position: absolute;
    bottom: 20px;
    right: 20px;
    width: 100px;
    height: 100px;
}

.seal img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.close-button {
    background: #ffc107;
    border: none;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
}
</style> -->