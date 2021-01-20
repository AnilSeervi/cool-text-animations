const container = document.getElementById("main");
const channelSplit = document.getElementById("channelSplit");
const liquidDistort = document.getElementById("liquidDistort");
const rollingDistort = document.getElementById("rollingDistort");
const slidingDoor = document.getElementById("slidingDoor");

const text = new Blotter.Text("ANIL SEERVI", {
  family: "serif",
  size: 120,
  fill: "##000",
  paddingLeft: 80,
  paddingRight: 80,
  paddingTop: 80,
  paddingBottom: 80,
});

// Files material
const material = new Blotter.FliesMaterial();
material.uniforms.uPointCellWidth.value = 0.01;
material.uniforms.uPointRadius.value = 0.6;
material.uniforms.uSpeed.value = 3;

const filesMaterial = new Blotter(material, {
  texts: text,
});
const scope = filesMaterial.forText(text);
scope.appendTo(container);

// channel split material
const channelSplitMaterial = new Blotter.ChannelSplitMaterial();
channelSplitMaterial.uniforms.uOffset.value = 0.018;
channelSplitMaterial.uniforms.uRotation.value = 45;
channelSplitMaterial.uniforms.uApplyBlur.value = 1.0;
channelSplitMaterial.uniforms.uAnimateNoise.value = 1.0;

const blotterChannelSplit = new Blotter(channelSplitMaterial, {
  texts: text,
});
const scopeSplitChannel = blotterChannelSplit.forText(text);
scopeSplitChannel.appendTo(channelSplit);

// liquid distort material
const liquidDistortMaterial = new Blotter.LiquidDistortMaterial();

const blotterLiquidDistort = new Blotter(liquidDistortMaterial, {
  texts: text,
});
const scopeLiquidDistort = blotterLiquidDistort.forText(text);
scopeLiquidDistort.appendTo(liquidDistort);

// rolling distort material
const rollingDistortMaterial = new Blotter.RollingDistortMaterial();
const blotterRollingDistort = new Blotter(rollingDistortMaterial, {
  texts: text,
});
const scopeRollingDistort = blotterRollingDistort.forText(text);
scopeRollingDistort.appendTo(rollingDistort);

// sliding door material
const slidingDoorMaterial = new Blotter.SlidingDoorMaterial();
const blotterSlidingDoor = new Blotter(slidingDoorMaterial, {
  texts: text,
});
const scopeSlidingDoor = blotterSlidingDoor.forText(text);
scopeSlidingDoor.appendTo(slidingDoor);
