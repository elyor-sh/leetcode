function calc (word) {
    const splitted = word.split(' ')
    const result = splitted.reduce((acc, item) => {
        const xy = item.split('\n')
        acc.push(...xy)
        return acc
    } ,[])

    return result.length
}

const word = `In the future, it seems, more difficult to live on Earth. Some people think more money should be spent on researching another planet to live, such as Mars. To what extent do you agree or disagree with this statement?

It is said that, some people believe that it will be difficult to live on Earth in recent times, and that is why we need to allocate money to explore the conditions for habitation on other planets, such as Mars. I do not agree with this opinion. I think we can live on earth for a long time by saving resources and using them properly, and it is much easier and cheaper than finding the right conditions for life on planets like Mars. First of all, we should learn to conserve the resources we are currently using. Knowledge of saving resources allows us to use resources for a long time. For example, to save oil, we can replace plastic products with paper products that are easy to recycle, or use alternative solar electricity to save gas.
 Moreover, we must learn to use these resources properly. For example, if we can get used to not wasting drinking water, stop using techniques that are harmful to nature, and use recyclable and harmless alternatives for every resource, we can live on Earth for a long time.
In conclusion, I believe that we can live on Earth for a long time by researching and learning methods to conserve Earth's resources as much as possible and use them properly.`

console.log(calc(word))