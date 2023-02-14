## Quick start

Install this library with peer dependencies:

```
pnpm add svelte-g2plot-pie
# or
yarn add svelte-g2plot-pie
# or
npm i svelte-g2plot-pie

```

## Usage

Default data format is `{type: value}`

```
<script>
  import SveltePie from 'svelte-g2plot-pie'
</script>

<SveltePie {data} />
```

### Custom Config

The configuration parameters are consistent with those of `G2Plot Pie`, example:

Set `angleField` to `name`

```
<SveltePie
  {data}
  option = {{angleField: 'name' }}
/>
```


