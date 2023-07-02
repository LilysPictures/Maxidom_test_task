<template>
    <div class="container center top-line pb-3">
        <div class="row text-uppercase pb-2">
            <div class="col-2 topnav pt-3">Магазины</div>
            <div class="col-2 topnav pt-3">О нас</div>
            <div class="col-3 topnav pt-3">Новости и Акции</div>
            <div class="col-3 topnav pt-3">Как добраться</div>
            <div class="col-2 topnav pt-3">Партнерам</div>
        </div>
    </div>
</template>

<script></script>

<style scoped lang="scss">
.top-line {
    border-top: 2px solid gray;
}

.topnav {
    overflow: hidden;
    display: block;
    text-align: center;    
    text-decoration: none;
    border-top: 3px solid transparent;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    align-items: center;
    text-align: center;
    font-variant: all-small-caps;
    color: #858282;
}

.topnav:hover {
    border-top: 3px solid red;
    color: orange;
}

.topnav.active {
    border-top: 3px solid red;
    color: orange;
}
</style>