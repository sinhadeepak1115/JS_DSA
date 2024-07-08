def is_perfect_number(n):
    """
    Function to check if a number is a perfect number.
    A number is perfect if it is divisible by all of its digits.
    """
    original_n = n
    while n > 0:
        digit = n % 10
        if digit == 0 or original_n % digit != 0:
            return False
        n = n // 10
    return True

def sum_of_perfect_numbers(start, stop):
    """
    Function to calculate the sum of all perfect numbers between start and stop (inclusive).
    """
    total_sum = 0
    for number in range(start, stop + 1):
        if is_perfect_number(number):
            total_sum += number
    return total_sum

# Sample Input
start = int(input())
stop = int(input())

# Output the result
print(sum_of_perfect_numbers(start, stop))
