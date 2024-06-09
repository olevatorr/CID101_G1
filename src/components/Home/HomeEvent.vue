<script setup>
import EventCard from '@/components/EventCard.vue';
const eventList = [
    {
        id: "005",
        title: "澎湖海洋淨灘活動",
        place: "澎湖縣馬公市西嶼海灘",
        date: "活動日期：2024年6月20日",
        Deadline: "截止日期：2024年6月5日",
        imageUrl: "https://picsum.photos/300/200/?random=5",
        people: "報名人數：250/300"
    },
    {
        id: "006",
        title: "綠島珊瑚礁保育淨灘行動",
        place: "綠島珊瑚礁區",
        date: "活動日期：2024年7月12日",
        Deadline: "截止日期：2024年6月28日",
        imageUrl: "https://picsum.photos/300/200/?random=6",
        people: "報名人數：80/100"
    },
    {
        id: "007",
        title: "蘭嶼淨灘環保之旅",
        place: "蘭嶼島東清部落海灘",
        date: "活動日期：2024年8月3日",
        Deadline: "截止日期：2024年7月20日",
        imageUrl: "https://picsum.photos/300/200/?random=7",
        people: "報名人數：120/150"
    },
    {
        id: "008",
        title: "澎湖七美海岸淨灘日",
        place: "澎湖七美鄉海口村海灘",
        date: "活動日期：2024年9月14日",
        Deadline: "截止日期：2024年8月30日",
        imageUrl: "https://picsum.photos/300/200/?random=8",
        people: "報名人數：180/220"
    }
]
</script>

<template>
    <section class="section section-index-event">
        <div class="container">
            <h3>
                EVENT<br>
                活動
            </h3>
            <div class="row">
                <EventCard :eventList="eventList" />
            </div>
            <button>查看更多活動</button>
        </div>
    </section>
</template>