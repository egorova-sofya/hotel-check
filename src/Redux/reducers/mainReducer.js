const UPDATE_ERROR = "UPDATE_ERROR";

const defaultState = {
  error: "",
  imagesArr: [
    {
      id: 1,
      url: "https://s3-alpha-sig.figma.com/img/d24d/f4c0/11b700cbbec1b90478095ff8f098c27d?Expires=1650844800&Signature=J3ZmTVShImBMo556iUytZy02aiT3uivlaTyCZ94a3oxoxGjSWpxFd5oaZ91yx6cogHhE8LWLKIHFfpaXA107RTfBzpoTrWh47v9Frr1RYyPP-NzvxwphKyEhaRsL5hc-9Y2PjzZF8TCmE86-mA0L1pBnPviNvHSdZBX6vyHmJyEczsgC1tQ6JcRJuhi~zQWMZf229lD~cmY~4XzjXxfSGwGgQw~DW8jCLwZ~vCIs7s5UBzQBX0baPqvZhcn9LRQcnd3ka~xK31MA2i4pIWXjjBvZEMQgR6lMfsjnpjYN6GaT3ImUZ8OojpwzlE2NETxcXvdPXETPGZv5rAuADC54aA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
    {
      id: 2,
      url: "https://s3-alpha-sig.figma.com/img/d2a4/71f4/e777b38f94e7048b5c9f3a202666d591?Expires=1650844800&Signature=cLStWi6B749NeDzOHJz5SpSiZdvDQ7KxJIrycEBxeugwtIOOeqVHE4zvCrknU0AxredOfB3~Wlna1xJxDHmwxnB-AgeEqTxe5sabVRDcrZURYc21Cb~KuQ8KiauUVQeAuDVDuZ7H9jVK6vFMEwziHCeXWtl2FD~lcvlq5B~NDgmtdiOdP-whuvxrS3z2LNqki9ewg6cN6WeS-TcuhNQiF~eSvk-QkylEKwWb-7cMuNTX9ZSzk5nO5KLPb4DJG6O1yS8Dx~78EOZvyyMnFICyWCEkvvycyAJtLJZ7Ca8TouwKmJz12ViaT60rh1Tf7HaPyVsTvXs9zhN9pzagxG2iEA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
    {
      id: 3,
      url: "https://s3-alpha-sig.figma.com/img/fb52/f3d5/761a5c3d956c7a5e8785a9cfdd0000e8?Expires=1650844800&Signature=XuRAUMYlW1ZOSMVW7o2NouECDN6cxR-OG5MRtCCOT9rTVY55Qk-HDvWx9sQSu~88V8~Msa2b9wsvvUJ5AQVCgU2f24q0ROXBv0xzLmQ0fxwtO0g11JArJFHuqjIFdi4sHEuIsgm1Qb1o3OVhDoUfT4govIvEBVcd1YpEDlw561ICViGXfyrcb5cLct7c96EDaMmkj1Q9P3F0wjQ9UrXGLtfK7joz0~pSizp5wTaV3SY5B34mLkg2EnLpMlvTsO3sDBgxu16wHF3GzARjVuTWIAkcglhbsrNgFc7TM8VKSAGbA~o0vsQrAid1vKcjSLcj9KBuzWVwL~D9B1xYwYYRCA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
    {
      id: 4,
      url: "https://s3-alpha-sig.figma.com/img/5ac5/f260/69fdab31cb4acd373e398a5cedcc7923?Expires=1650844800&Signature=IcfGMNIbAQLTP3N1kKl7LE8HB2mlQ1Qh7D8gnLBtYRwPdxnLszf7UUHKQw0HWdfkGlHx8cWadcGzv9DdE2V8Jc-ptQJX9ZVEBVPssI0zBF4NbB4QUKcgd1iwSlAfZlB1740iNGI1niFai1eFNGYnYvrqz6YbDWG91aYqyeWuE1npUBF4nvc8DA6AzdGS8qw2Ej6Ww18j09G3C~xReL4dTz3fxCOkNBPCxnATYMywkZqoHPnhPifDCkhKduVQspKrU2CqNQqEzrR9xxgOf9WjM9EH2N81Ls1oZXU0bGoL3Z8UZObJEApU~SEesTJ3s-Qwttj8Ouxjf0FNNPG4PcT3pQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
  ],
};

export const mainReducer = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const updateError = (payload) => ({
  type: UPDATE_ERROR,
  payload,
});
