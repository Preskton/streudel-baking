//@by Esk
//@title Twin Shopkeepers Who Sell Items That Will Probably Not Work As Advertised

let progression=chord("<C9 A9 E9 F9 C9 A9 B9 G9>")

setcps(.75)

stack(
  s("square")
    .set(progression)
    .mode("root:c3")
    .voicing()
    .gain(.5)
    .dec(.8),

  n("<-2 -3> [8/2 ~!3 6 4]")
    .set(progression)
    .mode("duck:c4")
    .voicing()
    .s("sawtooth"),

  n("1 8 6 8 5 8 6 8")
    .set(progression)
    .mode("duck:c6")
    .voicing()
    .s("<sawtooth triangle>")
    .dec(.2)
    .pan(sine.slow(2)),
)
