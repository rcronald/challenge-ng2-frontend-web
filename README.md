# Resource Records

## Environment 

- Angular CLI Version: 15.2.8
- Angular Core Version: 15.2.8
- Default Port: 8000

## Application Demo:

![](https://hrcdn.net/s3_pub/istreet-assets/1BmJlzr9CTyiszlaEwql1g/resourceRecords.gif)

## Functionality Requirements

The application has 2 components:
- The `ResourceTable` component, which displays the list of resources in a tabular form.
- The `ResourceDetails` component, which presents the full details of the selected resource.

The application has the following functionalities:

- Initially, the `ResourceTable` displays entire list of resources is a tabular format. The list of resources is passed to it as input which is an array of `Resource` type objects. The `Resource` type has below interface:

```
  interface Resource {
    name: string;
    country: string;
    id: string; // Unique identifier of each resource
  }
```

- Each resource row in this table has columns for `name`, `country`, and `View details` button. Clicking on `View details` button selects this resource, and displays the details of the selected resource in `ResourceDetails` component.

- The details of the resource is defined in `ResourceDetails` interface:

```
  interface ResourceDetails {
    id: string;
    city: string;
    pin: number;
    state: string;
    totalCapacity: number;
    allocated: number;
  }
```
- The `ResourceDetails` component renders following columns - `name`, `country`, `city`, `state`, `pin`, `totalCapacity`, and `allocated`. It should render only single resource at a time which is most recently selected.

- You need to merge data from both interfaces to render it in `ResourceDetails` component.

- Since no resource is selected initially, `ResourceDetails` component should not be rendered.

## Testing Requirements

The following data-test-id attributes are required in the component for the tests to pass:

- The `ResourceTable <tbody>` has the data-test-id attribute `resource-list`.
- Each `View details` button has the data-test-id attribute `view-details-button`.
- The `ResourceDetails <tbody>` has the data-test-id attribute `resource-details`.

## Project Specifications

**Read-only Files**
- src/app/app.component.spec.ts

**Commands**
- run: 
```bash
 npm start
```
- install: 
```bash
 npm install
```
- test: 
```bash
 npm test
```
