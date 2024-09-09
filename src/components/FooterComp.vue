<template lang="">
    <div>
        <footer><p>&copy; Bells' Beauty Boutique {{currentYear}}| All rights reserved</p></footer>
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            currentYear: new Date().getFullYear()

        }
    },
    
}
</script>
<style>
footer{
    background-color: #a53860; 
    text-align:center;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    color:black;
    text-align: center;
    
}

</style>