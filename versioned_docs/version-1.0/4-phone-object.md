---
sidebar_position: 4
---

# PhoneObject

The `PhoneObject`.

| Field        | Type        | Required                 | Description
|--------------|-------------|--------------------------|-------------------------------------------------
| phoneNumber  | string      | true                     | The phone number that is in E.164 format
| isDNS        | boolean     |                          | If the phone number is a DNC (Do Not Call) list

## Example

```
{
  phoneNumber: "+12345678900"
  isDNC: false
}
```

