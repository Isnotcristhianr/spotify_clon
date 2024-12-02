<script lang="ts">
    const currentDate = new Date();
    const hour = currentDate.getHours();

    let greeting = "";

    if (hour < 12) {
        greeting = "Buenos días";
    } else if (hour < 18) {
        greeting = "Buenas tardes";
    } else {
        greeting = "Buenas noches";
    }
</script>

<div class="text-3xl font-bold">{greeting}</div>