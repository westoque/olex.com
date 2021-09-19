---
sidebar_position: 2
---

# MainContact

The `MainContact` is the only required field in the OLEX specification.

**A `MainContact` must have a valid `email` OR `phone` field.**

| Field        | Type                              | Required                         |
|--------------|-----------------------------------|--------------------------------  |
| email        | [EmailObject](/docs/email-object) | true *(if phone is not present)* |
| phone        | [PhoneObject](/docs/phone-object) | true *(if email is not present)* |
| firstName    | String                            |                                  |
| middleName   | String                            |                                  |
| lastName     | String                            |                                  |

## Example

A contact with just an email:

```
{
  mainContact: {
    email: {
      emailAddress: "foo@bar.com",
      isUnsubscribed: false
    }
  }
}
```

A contact with just a phone:

```
{
  mainContact: {
    phone: {
      phoneNumber: "+12345678900",
      isDNC: false
    }
  }
}
```

A more complete example:

```
{
  mainContact: {
    email: {
      emailAddress: "foo@bar.com",
      isUnsubscribed: false
    },
    phone: {
      phoneNumber: "+12345678900"
      isDNC: false
    },
    firstName: "Foo",
    lastName: "Bar"
  }
}
```
