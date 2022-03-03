<script>
  export let mode;
  export let value;
  export let tran = false;

  $: label = mode.toUpperCase();
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

<div class="notification {cssClass} is-light has-text-centered">
  {label} : {value}
</div>
