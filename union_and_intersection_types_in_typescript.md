# Combining Union and Intersection Types in TypeScript

TypeScript offers type composition primitives that allow developers combine data types in a flexible manner. Union types "|" represent an "either-or" relationship and intersection types "&" represent a "both-and" combination. They both are used in real world problems.

Practical Scenario: API Network Response
Consider an API state management flow. Every response from network service shares common metadata such as a request timestamp and unique trace identifier. However, the payload outcome depends on whether the call succeeded or failed. 

By intersecting shared base properties with a union of possible states, we can get a discriminated union without duplicating code:

type BaseResponse = {
  requestId: string;
  timestamp: number;
};

type SuccessPayload = {
  status: "success";
  data: { userId: string; email: string };
};

type ErrorPayload = {
  status: "error";
  errorMessage: string;
};

type ApiResponse = BaseResponse & (SuccessPayload | ErrorPayload);

When consuming this type, TypeScript guarantees that 'requestId' and 'timestamp' are always accessible. Furthermore, inspecting the 'status' discriminant automatically narrows the available properties:

function handleResponse(response: ApiResponse): void {
  console.log(`Trace: ${response.requestId}`);

  if (response.status === "success") {
    console.log(`User email: ${response.data.email}`);
  } else {
    console.error(`Failure: ${response.errorMessage}`);
  }
}


Combining union and intersection types prevents repetitive structural declarations while maintaining strict compile-time validation. This method provides consistency, flexibility, but with reduced redundancy.