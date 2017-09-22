export default <T>(arr: (T | null | undefined)[], el: T) => {
  const pos = arr.indexOf(el)
  if (pos === -1) {
    return
  }
  arr[pos] = arr[arr.length - 1]
  arr.pop()
}
