<template>
    <div class="event-card">
        <div class="text">
            <h3>{{ title }}</h3>
            <p>{{ place }}</p>
            <p>{{ date }}</p>
            <p>{{ Deadline }}</p>
        </div>
        <div class="pic">
            <img :src="imageUrl" />
        </div>
        <div class="addnew">
            <span>{{ people }}</span>
            <i class="fa-solid fa-user-plus"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EventCard',
    props: {
        title: {
            type: String,
            required: true
        },
        place: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        },
        Deadline: {
            type: String,
            required: true
        },
        imageUrl: {
            type: String,
            required: true
        },
        people: {
            type: String,
            required: true
        }
    }
}
</script>