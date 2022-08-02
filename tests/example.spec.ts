import { test, expect } from '@playwright/test';
import { FOO } from "@tests/utils/const";

test('should work', async ({ page }) => {
  expect(FOO).toBe(47);
});
