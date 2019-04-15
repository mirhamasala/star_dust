# Starry Sky

## Lars's Instructions

The star clicker I started at `16:19`, I had it working and live by `17:23`. That’s an hour and 4 minutes
I think you can do it in 2.

## Round 1

### Move Element to Mouse Click Position

Calculating the mouse click position

Adjusting the position for any offsets, margins, and paddings

Setting a transform to move the element to the click point

Using a transition to animate the `transform` property

**Source:** <https://www.kirupa.com/snippets/move_element_to_click_position.htm>

## Notes from Lars

The main difference between our code is that I used position `relative`/`absolute` to place the stars on the `body`–`body` being the parent relative element.

I also placed a star by generating an HTML element to the page.

Then on rendering the element the animation is run.

And I have an event listener for `animationend` which removes the element from the page after the animation concludes.

---

Click events have a 200ms delay on touch screens. So I looked into `touchstart`, but then I was getting double stars. Turns out a touch event also triggers a click event, weird mobile behavior. That’s why I have some conditions set for that in my code.

If you have a click event handler on a touch screen, it takes 200ms to register because it looks for a `touchstart` first. It’s a built-in pause so if you want to get around that you have to listen to `touchstart`.

## Look up

- [x] Animations
- [x] Transitions
- [x] `transform` property
- [ ] `Math.floor()`, `Math.random()`

### Notes

**Source:** <https://zinoui.com/blog/css-transitions?>
- The normal behavior, when you change the state of an element, is to happen instantly. With using of CSS transitions, you can slow down the changes and adjust the effect how they will be applied.

**Source: **<https://cssanimation.rocks/transition-vs-animation/>
- If you want to change an element from one state to another smoothly, a transition is a good choice.
- CSS Animations are a more powerful alternative to transitions. Rather than rely on a change from one beginning state to an end state, animations can be made up of as many in-between states as you like, and offer more control over how the states are animated.

## Resources

- [Animating movement with translate3d](https://www.oreilly.com/ideas/animating-movement-with-translate3d)
- [Creating Elements with JS](https://htmldog.com/guides/javascript/advanced/creatingelements/)
- [Move Element to Click Position](https://www.kirupa.com/snippets/move_element_to_click_position.htm)
- [Move Element to Mouse Click Position](https://www.youtube.com/watch?v=b4GwvdhrEQg) 🎥
- [Transitions vs Animation](https://cssanimation.rocks/transition-vs-animation/)
- [Use CSS to make object appear, then after delay, make it disappear](https://stackoverflow.com/questions/48174797/use-css-to-make-object-appear-then-after-delay-make-it-disappear) - Stack Overflow
- [`will-change`](https://cssreference.io/property/will-change/)

### Lars's Color Resources

- <https://coolors.co/>
- <https://www.webfx.com/web-design/random-color-picker/#345EE6>
- <https://color.adobe.com/nl/create/color-wheel/>
- <https://colorhunt.co/>
- <https://www.color-hex.com/>
- <https://cssgradient.io/>
- <https://www.brainpickings.org/2012/08/17/goethe-theory-of-colours/>
