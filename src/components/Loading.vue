<template>
    <div class="d-flex justify-content-center">
            <div class="loadingio-spinner-bars-wbr7da6k8ue">
                <div class="ldio-3hyljd212ao">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name: 'Loading'
}
</script>

<style>
    @keyframes ldio-3hyljd212ao {
    0% { opacity: 1 }
    50% { opacity: .5 }
    100% { opacity: 1 }
    }
    .ldio-3hyljd212ao div {
    position: absolute;
    width: 20px;
    height: 80px;
    top: 60px;
    animation: ldio-3hyljd212ao 0.9615384615384615s cubic-bezier(0.5,0,0.5,1) infinite;
    }.ldio-3hyljd212ao div:nth-child(1) {
    transform: translate(30px,0);
    background: #5f2a62;
    animation-delay: -0.5769230769230769s;
    }.ldio-3hyljd212ao div:nth-child(2) {
    transform: translate(70px,0);
    background: #a976c3;
    animation-delay: -0.38461538461538464s;
    }.ldio-3hyljd212ao div:nth-child(3) {
    transform: translate(110px,0);
    background: #a0de59;
    animation-delay: -0.19230769230769232s;
    }.ldio-3hyljd212ao div:nth-child(4) {
    transform: translate(150px,0);
    background: #466b5a;
    animation-delay: -0.9615384615384615s;
    }
    .loadingio-spinner-bars-wbr7da6k8ue {
    width: 200px;
    height: 200px;
    display: inline-block;
    overflow: hidden;
    }
    .ldio-3hyljd212ao {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0; /* see note above */
    }
    .ldio-3hyljd212ao div { box-sizing: content-box; }
</style>