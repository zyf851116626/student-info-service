import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

@Module({
  namespaced: true
})
export default class Test extends VuexModule {
  // state
  public count = 0

  // getter
  public get getCount () {
    return this.count
  }

  // mutation
  @Mutation
  public increment (delta: number) {
    this.count += delta
  }

  @Mutation
  public decrement (delta: number) {
    this.count -= delta
  }

  // Action装饰器中写调用的commit，incr中return的值即为commit:increment中传入的值
  @Action({ commit: 'increment' })
  public incr (params: {a: number; b: string}) {
    return params.a
  }

  @Action({ commit: 'decrement' })
  public decr () {
    return 3
  }
}
