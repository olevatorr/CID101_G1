<template>
  <section class="section section-event-title">
    <div class="container">
      <div class="title-wrap">
        <div class="title">
          <span>活動</span>
          <h1>EVENTS</h1>
        </div>
      </div>
    </div>
  </section>
  <section class="section section-event-banner">
    <div class="container">
      <h2 class="sloagn1">為保護大自然盡份心力</h2>
      <h2 class="sloagn2">美麗的海洋，守護有你有我!</h2>
      <button class="fast-signup">一鍵報名</button>
    </div>
  </section>
  <section class="section section-event-date">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-6">
          <div>
            <FullCalendar :options="calendarOptions" />
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div class="area-list">
            <div class="area">
              <h3>北部</h3>
              <p>北海岸環保淨灘行動</p>
            </div>
            <div class="area">
              <h3>中部</h3>
              <p>台中海洋守護淨灘</p>
            </div>
            <div class="area">
              <h3>南部</h3>
              <p>南台灣淨灘大會</p>
            </div>
            <div class="area">
              <h3>東部</h3>
              <p>東部海岸守護者淨灘</p>
            </div>
            <div class="area">
              <h3>離島</h3>
              <p>綠島海岸守護者淨灘</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section section-event-list">
    <div class="container">
      <h2>活動列表</h2>
      <div class="menu">
        <select name="" class="choose">
          <option value="">全台灣(地區)</option>
          <option value="">北部</option>
          <option value="">中部</option>
          <option value="">南部</option>
          <option value="">東部</option>
          <option value="">離島</option>
        </select>
      </div>
      <div class="row">
        <div class="col-12 col-md-6 col-lg-3">
          <div class="event-card">
            <div class="text">
              <h3 class="theme">北海岸環保淨灘行動</h3>
              <p class="place">新北市漁人碼頭</p>
              <p>活動日期：2024年6月15日</p>
              <p>截止日期：2024年6月10日</p>
            </div>
            <div class="pic">
              <img src="https://picsum.photos/300/200/?random=10" />
            </div>
            <div class="addnew">
              <span>報名人數：100/150</span>
              <a href="#"><i class="fa-solid fa-user-plus"></i></a>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <div class="event-card">
            <div class="text">
              <h3 class="theme">北海岸環保淨灘行動</h3>
              <p class="place">新北市漁人碼頭</p>
              <p>活動日期：2024年6月15日</p>
              <p>截止日期：2024年6月10日</p>
            </div>
            <div class="pic">
              <img src="https://picsum.photos/300/200/?random=10" />
            </div>
            <div class="addnew">
              <span>報名人數：100/150</span>
              <a href="#"><i class="fa-solid fa-user-plus"></i></a>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <div class="event-card">
            <div class="text">
              <h3 class="theme">北海岸環保淨灘行動</h3>
              <p class="place">新北市漁人碼頭</p>
              <p>活動日期：2024年6月15日</p>
              <p>截止日期：2024年6月10日</p>
            </div>
            <div class="pic">
              <img src="https://picsum.photos/300/200/?random=10" />
            </div>
            <div class="addnew">
              <span>報名人數：100/150</span>
              <a href="#"><i class="fa-solid fa-user-plus"></i></a>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <div class="event-card">
            <div class="text">
              <h3 class="theme">北海岸環保淨灘行動</h3>
              <p class="place">新北市漁人碼頭</p>
              <p>活動日期：2024年6月15日</p>
              <p>截止日期：2024年6月10日</p>
            </div>
            <div class="pic">
              <img src="https://picsum.photos/300/200/?random=10" />
            </div>
            <div class="addnew">
              <span>報名人數：100/150</span>
              <a href="#"><i class="fa-solid fa-user-plus"></i></a>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <div class="event-card">
            <div class="text">
              <h3 class="theme">北海岸環保淨灘行動</h3>
              <p class="place">新北市漁人碼頭</p>
              <p>活動日期：2024年6月15日</p>
              <p>截止日期：2024年6月10日</p>
            </div>
            <div class="pic">
              <img src="https://picsum.photos/300/200/?random=10" />
            </div>
            <div class="addnew">
              <span>報名人數：100/150</span>
              <a href="#"><i class="fa-solid fa-user-plus"></i></a>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <div class="event-card">
            <div class="text">
              <h3 class="theme">北海岸環保淨灘行動</h3>
              <p class="place">新北市漁人碼頭</p>
              <p>活動日期：2024年6月15日</p>
              <p>截止日期：2024年6月10日</p>
            </div>
            <div class="pic">
              <img src="https://picsum.photos/300/200/?random=10" />
            </div>
            <div class="addnew">
              <span>報名人數：100/150</span>
              <a href="#"><i class="fa-solid fa-user-plus"></i></a>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <div class="event-card">
            <div class="text">
              <h3 class="theme">北海岸環保淨灘行動</h3>
              <p class="place">新北市漁人碼頭</p>
              <p>活動日期：2024年6月15日</p>
              <p>截止日期：2024年6月10日</p>
            </div>
            <div class="pic">
              <img src="https://picsum.photos/300/200/?random=10" />
            </div>
            <div class="addnew">
              <span>報名人數：100/150</span>
              <a href="#"><i class="fa-solid fa-user-plus"></i></a>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <div class="event-card">
            <div class="text">
              <h3 class="theme">北海岸環保淨灘行動</h3>
              <p class="place">新北市漁人碼頭</p>
              <p>活動日期：2024年6月15日</p>
              <p>截止日期：2024年6月10日</p>
            </div>
            <div class="pic">
              <img src="https://picsum.photos/300/200/?random=10" />
            </div>
            <div class="addnew">
              <span>報名人數：100/150</span>
              <a href="#"><i class="fa-solid fa-user-plus"></i></a>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <div class="event-card">
            <div class="text">
              <h3 class="theme">北海岸環保淨灘行動</h3>
              <p class="place">新北市漁人碼頭</p>
              <p>活動日期：2024年6月15日</p>
              <p>截止日期：2024年6月10日</p>
            </div>
            <div class="pic">
              <img src="https://picsum.photos/300/200/?random=10" />
            </div>
            <div class="addnew">
              <span>報名人數：100/150</span>
              <a href="#"><i class="fa-solid fa-user-plus"></i></a>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <div class="event-card">
            <div class="text">
              <h3 class="theme">北海岸環保淨灘行動</h3>
              <p class="place">新北市漁人碼頭</p>
              <p>活動日期：2024年6月15日</p>
              <p>截止日期：2024年6月10日</p>
            </div>
            <div class="pic">
              <img src="https://picsum.photos/300/200/?random=10" />
            </div>
            <div class="addnew">
              <span>報名人數：100/150</span>
              <a href="#"><i class="fa-solid fa-user-plus"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div class="pagenumber">
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
      </div>
    </div>
  </section>
  <section class="section section-event-share">
    <h2>活動分享</h2>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 col-lg-4">
          <div class="event-card">
            <div class="pic">
              <img src="../../public/img/event/event_01.jpg" />
            </div>
            <div class="text">
              <div class="theme">
                <div class="event-name">
                  <p>活動名稱：北海岸愛地球淨灘活動</p>
                </div>
                <div class="report">
                  <a href="#"
                    ><i class="fa-solid fa-circle-exclamation" style="color: #e7a600"></i
                  ></a>
                </div>
              </div>
              <p class="place">活動地點：新北市淡水區漁人碼頭</p>
              <p>活動日期：2024年6月15日</p>
              <p>分享人：林小美</p>
              <p>
                參加心得： 這次活動讓我深刻體會到海洋保護的重要性。看到大家一起努力...
                <a href="#" class="seemore">閱讀更多</a>
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <div class="event-card">
            <div class="pic">
              <img src="../../public/img/event/event_01.jpg" />
            </div>
            <div class="text">
              <div class="theme">
                <div class="event-name">
                  <p>活動名稱：北海岸愛地球淨灘活動</p>
                </div>
                <div class="report">
                  <a href="#"
                    ><i class="fa-solid fa-circle-exclamation" style="color: #e7a600"></i
                  ></a>
                </div>
              </div>
              <p class="place">活動地點：新北市淡水區漁人碼頭</p>
              <p>活動日期：2024年6月15日</p>
              <p>分享人：林小美</p>
              <p>
                參加心得： 這次活動讓我深刻體會到海洋保護的重要性。看到大家一起努力...
                <a href="#" class="seemore">閱讀更多</a>
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <div class="event-card">
            <div class="pic">
              <img src="../../public/img/event/event_01.jpg" />
            </div>
            <div class="text">
              <div class="theme">
                <div class="event-name">
                  <p>活動名稱：北海岸愛地球淨灘活動</p>
                </div>
                <div class="report">
                  <a href="#"
                    ><i class="fa-solid fa-circle-exclamation" style="color: #e7a600"></i
                  ></a>
                </div>
              </div>
              <p class="place">活動地點：新北市淡水區漁人碼頭</p>
              <p>活動日期：2024年6月15日</p>
              <p>分享人：林小美</p>
              <p>
                參加心得： 這次活動讓我深刻體會到海洋保護的重要性。看到大家一起努力...
                <a href="#" class="seemore">閱讀更多</a>
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <div class="event-card">
            <div class="pic">
              <img src="../../public/img/event/event_01.jpg" />
            </div>
            <div class="text">
              <div class="theme">
                <div class="event-name">
                  <p>活動名稱：北海岸愛地球淨灘活動</p>
                </div>
                <div class="report">
                  <a href="#"
                    ><i class="fa-solid fa-circle-exclamation" style="color: #e7a600"></i
                  ></a>
                </div>
              </div>
              <p class="place">活動地點：新北市淡水區漁人碼頭</p>
              <p>活動日期：2024年6月15日</p>
              <p>分享人：林小美</p>
              <p>
                參加心得： 這次活動讓我深刻體會到海洋保護的重要性。看到大家一起努力...
                <a href="#" class="seemore">閱讀更多</a>
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <div class="event-card">
            <div class="pic">
              <img src="../../public/img/event/event_01.jpg" />
            </div>
            <div class="text">
              <div class="theme">
                <div class="event-name">
                  <p>活動名稱：北海岸愛地球淨灘活動</p>
                </div>
                <div class="report">
                  <a href="#"
                    ><i class="fa-solid fa-circle-exclamation" style="color: #e7a600"></i
                  ></a>
                </div>
              </div>
              <p class="place">活動地點：新北市淡水區漁人碼頭</p>
              <p>活動日期：2024年6月15日</p>
              <p>分享人：林小美</p>
              <p>
                參加心得： 這次活動讓我深刻體會到海洋保護的重要性。看到大家一起努力...
                <a href="#" class="seemore">閱讀更多</a>
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <div class="event-card">
            <div class="pic">
              <img src="../../public/img/event/event_01.jpg" />
            </div>
            <div class="text">
              <div class="theme">
                <div class="event-name">
                  <p>活動名稱：北海岸愛地球淨灘活動</p>
                </div>
                <div class="report">
                  <a href="#"
                    ><i class="fa-solid fa-circle-exclamation" style="color: #e7a600"></i
                  ></a>
                </div>
              </div>
              <p class="place">活動地點：新北市淡水區漁人碼頭</p>
              <p>活動日期：2024年6月15日</p>
              <p>分享人：林小美</p>
              <p>
                參加心得： 這次活動讓我深刻體會到海洋保護的重要性。看到大家一起努力...
                <a href="#" class="seemore">閱讀更多</a>
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <div class="event-card">
            <div class="pic">
              <img src="../../public/img/event/event_01.jpg" />
            </div>
            <div class="text">
              <div class="theme">
                <div class="event-name">
                  <p>活動名稱：北海岸愛地球淨灘活動</p>
                </div>
                <div class="report">
                  <a href="#"
                    ><i class="fa-solid fa-circle-exclamation" style="color: #e7a600"></i
                  ></a>
                </div>
              </div>
              <p class="place">活動地點：新北市淡水區漁人碼頭</p>
              <p>活動日期：2024年6月15日</p>
              <p>分享人：林小美</p>
              <p>
                參加心得： 這次活動讓我深刻體會到海洋保護的重要性。看到大家一起努力...
                <a href="#" class="seemore">閱讀更多</a>
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <div class="event-card">
            <div class="pic">
              <img src="../../public/img/event/event_01.jpg" />
            </div>
            <div class="text">
              <div class="theme">
                <div class="event-name">
                  <p>活動名稱：北海岸愛地球淨灘活動</p>
                </div>
                <div class="report">
                  <a href="#"
                    ><i class="fa-solid fa-circle-exclamation" style="color: #e7a600"></i
                  ></a>
                </div>
              </div>
              <p class="place">活動地點：新北市淡水區漁人碼頭</p>
              <p>活動日期：2024年6月15日</p>
              <p>分享人：林小美</p>
              <p>
                參加心得： 這次活動讓我深刻體會到海洋保護的重要性。看到大家一起努力...
                <a href="#" class="seemore">閱讀更多</a>
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <div class="event-card">
            <div class="pic">
              <img src="../../public/img/event/event_01.jpg" />
            </div>
            <div class="text">
              <div class="theme">
                <div class="event-name">
                  <p>活動名稱：北海岸愛地球淨灘活動</p>
                </div>
                <div class="report">
                  <a href="#"
                    ><i class="fa-solid fa-circle-exclamation" style="color: #e7a600"></i
                  ></a>
                </div>
              </div>
              <p class="place">活動地點：新北市淡水區漁人碼頭</p>
              <p>活動日期：2024年6月15日</p>
              <p>分享人：林小美</p>
              <p>
                參加心得： 這次活動讓我深刻體會到海洋保護的重要性。看到大家一起努力...
                <a href="#" class="seemore">閱讀更多</a>
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <div class="event-card">
            <div class="pic">
              <img src="../../public/img/event/event_01.jpg" />
            </div>
            <div class="text">
              <div class="theme">
                <div class="event-name">
                  <p>活動名稱：北海岸愛地球淨灘活動</p>
                </div>
                <div class="report">
                  <a href="#"
                    ><i class="fa-solid fa-circle-exclamation" style="color: #e7a600"></i
                  ></a>
                </div>
              </div>
              <p class="place">活動地點：新北市淡水區漁人碼頭</p>
              <p>活動日期：2024年6月15日</p>
              <p>分享人：林小美</p>
              <p>
                參加心得： 這次活動讓我深刻體會到海洋保護的重要性。看到大家一起努力...
                <a href="#" class="seemore">閱讀更多</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="pagenumber">
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
      </div>
      <div class="sharebtn">
        <button>活動分享</button>
      </div>
    </div>
  </section>
  <section class="section section-event-agree">
    <div class="container">
      <p class="statement">
        活動免責聲明:<br />

        歡迎參加由[活動組織者名稱]（以下簡稱「組織者」）主辦的[活動名稱]（以下簡稱「活動」）。
        參加本活動前，請您仔細閱讀並同意以下免責聲明條款： 1.
        自願參加：我自願參加此活動，並了解活動的性質及其潛在風險。 2.
        健康狀況：我確認我的身體狀況適合參加此活動，並保證在參加活動前已經進行必要的健康檢查。如有任何身體不適或健康問題，我將主動告知組織者。
        3.
        風險承擔：我理解並接受參加此活動可能存在的風險，包括但不限於身體傷害、財產損失等。我同意自行承擔參加活動的所有風險，並豁免組織者及其工作人員、志願者、贊助商對於任何意外事故、傷害或損失的責任。
        4.
        個人責任：我承諾在活動期間遵守活動規則和組織者的指示，對自己的行為負責。如果因我的行為導致自己或他人受傷或財產損失，我將自行承擔相應責任。
        5.
        保險：我了解組織者可能不提供任何形式的保險保障，我同意自行購買適當的保險以覆蓋參加活動期間可能發生的任何風險。
        6.
        不可抗力：如因天災、政府政策變更或其他不可抗力因素導致活動無法正常舉行，組織者不承擔任何責任。
        7.
        肖像權使用：我同意組織者在活動期間拍攝的照片、錄像及其他影像資料可用於宣傳和推廣活動之用，而無需支付任何費用。
        8.
        法律適用：本免責聲明受[國家/地區]法律管轄，任何因本免責聲明引起的爭議應提交[地點]的法院解決。
      </p>
      <div class="return">
        <button>Top</button>
      </div>
    </div>
  </section>
  <section class="section section-light-box">
    <div class="container">
      <div class="row">
        <div class="col-6 col-md-6">
          <div class="pic">
            <img src="https://picsum.photos/300/200/?random=10" />
            <div class="text">
              <h3>活動敘述</h3>
              <p class="Narrate">
                由環保志工組織的淨灘活動，旨在清理淡水區海灘垃圾並向參與者進行環保教育。
              </p>
            </div>
          </div>
        </div>
        <div class="col-6 col-md-6">
          <div class="activity-area">
            <div class="text">
              <div class="close">
                <i class="fa-regular fa-circle-xmark" style="color: #b6b6b6"></i>
              </div>
              <h3>北海岸環保淨灘行動</h3>
              <p>活動地點：淡水漁人碼頭Subheading</p>
              <p>活動日期：2024年6月15日</p>
              <p>截止日期：2024年6月10日</p>
              <p>報名人數：100/150</p>
              <div class="join">
                <p class="people">參加人數:</p>
                <select name="">
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                  <option value="">6</option>
                  <option value="">7</option>
                  <option value="">8</option>
                  <option value="">9</option>
                  <option value="">10</option>
                </select>
              </div>
            </div>
          </div>
          <div class="state">
            <button class="now">立即報名</button>
            <button class="stop">報名截止</button>
            <button class="full">報名已滿</button>
            <button class="end">活動結束</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section section-confirm">
    <div class="container">
      <div class="apply-wrap">
        <div class="close">
          <i class="fa-regular fa-circle-xmark" style="color: #b6b6b6"></i>
        </div>
        <div class="text">
          <h3>北海岸環保淨灘行動</h3>
          <p>活動地點：淡水漁人碼頭Subheading</p>
          <p>活動日期：2024年6月15日</p>
          <p>截止日期：2024年6月10日</p>
          <p>報名人數：100/150</p>
          <p>會員名稱:林小美</p>
          <p>報名人數:5人</p>
        </div>
      </div>
      <div class="sent-btn">
        <button class="sent">送出</button>
      </div>
    </div>
  </section>
  <section class="section-upload">
    <div class="upload">
      <h2>活動分享</h2>
      <div class="close">
        <i class="fa-regular fa-circle-xmark" style="color: #b6b6b6"></i>
      </div>
    </div>
    <form>
      <div class="box box-1">
        <p>活動場次</p>
        <select>
          <option value="">北海岸愛地球淨灘活動</option>
          <option value="">南台灣海岸清潔行動</option>
          <option value="">東海岸守護者淨灘</option>
        </select>
      </div>
      <div class="box box-2">
        <p>活動日期</p>
        <input type="date" name="" id="" />
      </div>
      <div class="box box-3">
        <p>活動地點</p>
        <h6>淡水漁人碼頭</h6>
      </div>
      <div class="box box-4">
        <p>分享人</p>
        <h6>林小美</h6>
      </div>
      <div class="box box-5">
        <p>活動圖片</p>
        <input type="file" name="" id="" />
      </div>
      <div class="box box-6">
        <p>活動心得</p>
        <div class="Experience">
          <h6>限100字</h6>
          <textarea placeholder="請輸入文字內容"></textarea>
        </div>
      </div>
    </form>
    <div class="shareBtn">
      <button>活動分享</button>
    </div>
  </section>
</template>

<script>
import { defineComponent, ref } from 'vue'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import Swal from 'sweetalert2'

export default defineComponent({
  components: {
    FullCalendar
  },
  setup() {
    const calendarOptions = ref({
      initialView: 'dayGridMonth',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      buttonText: {
        today: 'Today',
        month: 'Month',
        week: 'Week',
        day: 'Day'
      },
      events: [
        {
          title: 'All Day Event',
          start: '2024-05-19'
        },
        {
          title: 'Time Event',
          start: '2024-05-20 12:00:00'
        }
      ],
      eventClick: function (info) {
        info.event.remove()
      },
      eventRemove: function (info) {
        console.log('removed', info)
        Swal.fire({
          icon: info.event.allDay ? 'success' : 'info',
          title: info.event.title,
          text: `Removed: ${info.event.startStr}`,
          confirmButtonText: 'OK'
        })
      },
      plugins: [dayGridPlugin, timeGridPlugin]
    })

    return {
      calendarOptions
    }
  }
})
</script>
