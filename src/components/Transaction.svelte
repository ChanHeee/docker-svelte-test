<script>
  export let mode;
  export let value;
  export let removeTransaction;
  export let index;

  $: cssClass = getCssClass(mode);
  const getCssClass = (mode) => {
    switch (mode) {
      case 'balance':
        return 'is-info';
      case 'income':
        return 'is-success';
      case 'expenses':
        return 'is-danger';
    }
  };
</script>

<div class="notification {cssClass} is-light has-text-left">
  <span>{value}</span>
  <button
    id={index}
    class="delete is-medium mt-2.5 mr-2"
    on:click={(event) => removeTransaction(event)}
  />
</div>
