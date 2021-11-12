export default function(ctx){
  if(ctx.store.state.user){
    ctx.redirect('/');
  }
}