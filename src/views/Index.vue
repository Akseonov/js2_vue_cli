<template>
	<div class="Index">
		<promo />
		<offer />
		<catalog />
		<sales type="index" />
	</div>
</template>

<script>
	import promo from '../components/promo.vue';
	import offer from '../components/offer.vue';
	import catalog from '../components/catalog.vue';
	import sales from '../components/sales.vue';

	export default {
		name: "Index",
		components: {
			promo,
			offer,
			catalog,
			sales,
		},
		data() {
			return {

			}
		},
		methods: {

		},
    mounted() {

    }
  };
</script>

<style lang="sass">

</style>