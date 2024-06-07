<template>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="card in eventList" :key="card.id">
        <div class="event-card">
            <div class="text">
                <div class="theme">
                    <div class="event-name">
                        <h3>{{ card.title }}</h3>
                    </div>
                </div>
                <span>{{ card.place }}</span>
                <span>{{ card.date }}</span>
                <span>{{ card.Deadline }}</span>
            </div>
            <div class="pic">
                <img :src="card.imageUrl" />
            </div>
            <div class="people">
                <span>{{ card.people }}</span>
                <i class="fa-solid fa-user-plus"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {eventList:[]},
}
</script>