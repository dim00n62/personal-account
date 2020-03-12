<template>
  <div class="graph">
    <canvas height="276" class="graph__canvas"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js';

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export default {
  name: 'Graph',

  props: {
    data: {
      type: Array,
      default: () => ([])
    }
  },

  data: () => ({
    graph: {
      type: 'line',
      data: {
        labels: MONTHS,
        datasets: [{
          label: 'Revenue',
          borderColor: '#177D83',
          backgroundColor: null,
          data: [
            900, 1500, 900, 2000, 1000, 2000, 3000, 3100, 3500, 2000, 2500, 3700
          ],
        }]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        legend: {
          display: false
        },
        tooltips: {
          mode: 'index',
        },
        hover: {
          mode: 'index'
        },
        scales: {
          xAxes: [{
            gridLines: {
              display: false
            }
          }],
          yAxes: [{
            gridLines: {
              display: false
            }
          }],
          x: {
            scaleLabel: {
              display: true,
              labelString: 'Month',
            }
          },
          y: {
            scaleLabel: {
              display: true,
              labelString: 'Revenue'
            }
          }
        }
      }
    },
    chart: null
  }),

  mounted() {
    const canvas = this.$el.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    const g = ctx.createLinearGradient(0, 0, 0, canvas.height);
    g.addColorStop(0, 'rgba(255, 255, 255, .5)');
    g.addColorStop(1, '#F6F6FB');
    this.graph.data.datasets[0].backgroundColor = g;
    this.chart = new Chart(ctx, this.graph);

    this.chart.canvas.parentNode.style.height = '276px';
  }
};
</script>

<style lang="scss" scoped>
  .graph {
    grid-area: graph;
    height: 276px;

    &__canvas {
      widows: 100%;
      height: 100%;
    }
  }
</style>
