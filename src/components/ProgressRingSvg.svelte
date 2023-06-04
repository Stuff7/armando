<script lang="ts" context="module">
  import { createArcPath, degToRad } from "utils/math";

  const rotation = degToRad(90);
  const sweep = degToRad(270);
</script>

<script lang="ts">
  export let progress = 85;
  export let stroke = "var(--spacing-md-200)";
  export let radius = "var(--area-nm-100)";
  export let color = "var(--color-accent-1)";
  export let scale = 1;

  const progressId = crypto.randomUUID();
  const insideId = crypto.randomUUID();
  const clipId = crypto.randomUUID();
  const ringId = crypto.randomUUID();

  let paths = "";
  let keyTimes = "";

  $: r = 256 * scale;
  $: diameter = r * 2;
  $: center = [r, r] as [number, number];
  $: percentage = progress / 100;
  $: pathD = createArcPath(center, center, [0, sweep * percentage], rotation);
  $: ringD = createArcPath(center, center, [0, sweep], rotation);
  $: {
    const pathList = [];
    const keyTimeList = [];
    for (let i = 0; i < percentage; i += 0.02) {
      pathList.push(createArcPath(center, center, [0, sweep * i], rotation));
      keyTimeList.push(i.toFixed(2));
    }
    pathList.push(pathD);
    keyTimeList.push("1");
    paths = pathList.join(";");
    keyTimes = keyTimeList.join(";");
  }
</script>

<svg
  class="ProgressRingSvg"
  style:--ring-chart-radius={radius}
  style:--ring-chart-scale={scale}
  viewBox="0 0 {diameter} {diameter}"
  fill="none"
>
  <defs>
    <path id={ringId} d="{ringD}" stroke="white" stroke-width="calc({stroke} * 2)" />
    <path id={progressId} d={pathD} stroke={color} stroke-width="calc({stroke} * 2)">
      <animate
        attributeName="d"
        attributeType="XML"
        values={paths}
        keyTimes={keyTimes}
        dur="2s"
      />
    </path>
    <circle id={clipId} cx={r} cy={r} r={r} stroke-width="calc({stroke} * 2)" />
    <clipPath id="{insideId}">
      <use xlink:href="#{clipId}"/>
    </clipPath>
  </defs>
  <use xlink:href="#{ringId}" clip-path="url(#{insideId})" />
  <use xlink:href="#{progressId}" clip-path="url(#{insideId})" />
</svg>

<style lang="scss">
  .ProgressRingSvg {
    width: var(--ring-chart-radius);
    aspect-ratio: 1 / 1;
    transform: scale(var(--ring-chart-scale));
    transform-origin: center;
  }
</style>
