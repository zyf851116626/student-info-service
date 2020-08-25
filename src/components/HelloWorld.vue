<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

const test = namespace('Test')
@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string
  @test.Getter('getCount') public count: number | undefined
  @test.Mutation('increment')
  public increment!: (n: number) => void

  @test.Action('incr')
  public incr!: (params: {a: number; b: string}) => void

  private getUrl (url: string) {
    return url
  }

  private mounted () {
    console.log(this)
    console.log(this.count)
    this.increment(8)
    console.log(this.count)
    this.incr({ a: 3, b: '250' })
    console.log('应该与上面的数字一样', this.count)
    setTimeout(() => {
      console.log('应该有变化', this.count)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3
  margin 40px 0 0

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
