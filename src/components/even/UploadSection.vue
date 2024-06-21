<template>
    <div class="section-upload">
        <div class="container">
            <div class="upload">
                <h2>活動分享</h2>
                <div class="close">
                    <i class="fa-regular fa-circle-xmark"></i>
                </div>
            </div>
            <form>
                <div class="box box-1">
                    <label>活動場次</label>
                    <select>
                        <option value="">北海岸愛地球淨灘活動</option>
                        <option value="">南台灣海岸清潔行動</option>
                        <option value="">東海岸守護者淨灘</option>
                    </select>
                </div>
                <div class="box box-2">
                    <label>活動日期</label>
                    <input type="date" name="" id="" />
                </div>
                <div class="box box-3">
                    <label>活動地點</label>
                    <span>根據場次自動帶入</span>
                </div>
                <div class="box box-4">
                    <label>分享人</label>
                    <span>系統自動帶入</span>
                </div>
                <div class="box box-5">
                    <label>活動圖片</label>
                    <input type="file" name="" id="" class="newFile" />
                </div>
                <div class="box box-6">
                    <label>活動心得</label>
                    <div class="Experience">
                        <span>限100字</span>
                        <textarea rows="10" placeholder="請輸入文字內容"></textarea>
                    </div>
                </div>
            </form>
            <div class="shareBtn">
                <button>活動分享</button>
            </div>
        </div>
    </div>
</template>