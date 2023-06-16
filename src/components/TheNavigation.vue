<template>
    <div class="container center mt-3 top-line">
        <div class="row text-uppercase pb-2">
            <div class="col-2 topnav">Магазины</div>
            <div class="col-2 topnav pr-5">О нас</div>
            <div class="col-3 topnav text-left">Новости и Акции</div>
            <div class="col-3 topnav text-left px-0">Как добраться</div>
            <div class="col-2 topnav pr-2">Партнерам</div>
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
    float: left;
    display: block;
    text-align: center;
    padding: 16px 32px 16px 16px;
    text-decoration: none;
    border-top: 3px solid transparent;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    display: flex;
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