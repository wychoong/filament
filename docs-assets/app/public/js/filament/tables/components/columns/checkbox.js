function o({name:i,recordKey:s,state:n}){return{error:void 0,isLoading:!1,state:n,init:function(){Livewire.hook("commit",({component:e,commit:r,succeed:a,fail:f,respond:u})=>{a(({snapshot:h,effect:d})=>{this.$nextTick(()=>{if(this.isLoading||e.id!==this.$root.closest("[wire\\:id]").attributes["wire:id"].value)return;let t=this.getServerState();t===void 0||Alpine.raw(this.state)===t||(this.state=t)})})}),this.$watch("state",async()=>{let e=this.getServerState();if(e===void 0||Alpine.raw(this.state)===e)return;this.isLoading=!0;let r=await this.$wire.updateTableColumnState(i,s,this.state);this.error=r?.error??void 0,!this.error&&this.$refs.serverState&&(this.$refs.serverState.value=this.state?"1":"0"),this.isLoading=!1})},getServerState:function(){if(this.$refs.serverState)return!!this.$refs.serverState.value}}}export{o as default};
