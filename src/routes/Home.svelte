<script>
  import Transaction from './../components/Transaction.svelte';
  import Card from './../components/Card.svelte';
  import { balance, expenses, income, transaction } from './../store.js';

  let input = 0;
  let cal = '+';

  $: disabled = !input;
  $: $balance = $income + $expenses;

  const incomeFunc = () => {
    $income = $income + input;
    $transaction = [...$transaction, { mode: 'income', value: input }];
  };
  const expensesFunc = () => {
    $expenses = $expenses + input * -1;
    $transaction = [...$transaction, { mode: 'expenses', value: input * -1 }];
  };

  const saveHandler = () => {
    if (cal == '+') {
      incomeFunc();
      input = 0;
    } else {
      expensesFunc();
      input = 0;
    }
  };

  const removeTransaction = (event) => {
    const id = event.target.id;
    const { mode, value } = $transaction[id];
    if (mode == 'income') {
      $income = $income - value;
    } else {
      $expenses = $expenses - value;
    }
    $transaction = $transaction.filter((t, idx) => id != idx);
  };
</script>

<div class="container is-max-desktop mt-10 px-10">
  <div class="field has-addons mb-5">
    <p class="control">
      <span class="select">
        <select bind:value={cal}>
          <option value="+">+</option>
          <option value="-">-</option>
        </select>
      </span>
    </p>
    <p class="control is-expanded">
      <input
        class="input"
        type="number"
        bind:value={input}
        placeholder="Amount of money"
      />
    </p>
    <p class="control">
      <button class="button" on:click={saveHandler} disabled={disabled}
        >Save</button
      >
    </p>
  </div>
  <Card mode="balance" value={$balance} />
  <div class="columns-2 mb-3.5">
    <Card mode="income" value={$income} />
    <Card mode="expenses" value={$expenses} />
  </div>
  <hr class="h-0.5" />

  {#if $transaction.length > 0}
    {#each $transaction as t, i}
      <Transaction
        mode={t.mode}
        value={t.value}
        removeTransaction={removeTransaction}
        index={i}
      />
    {/each}
  {/if}
</div>
