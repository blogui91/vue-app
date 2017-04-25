<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
	<!-- Left side Drawer -->
	<q-drawer>
		<div class="list platform-delimiter">
			<div class="list-header">
				Left Side Drawer
			</div>
			<q-drawer-link icon="mail" to="/account">Account</q-drawer-link>
			<q-drawer-link icon="alarm" to="/alarms">Alarms</q-drawer-link>
		</div>
	</q-drawer>		
    <router-view></router-view>
  </div>
</template>

<script>
/*
 * Root component
 */
export default {}
</script>

<style></style>
