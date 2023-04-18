def longest_word_in(sentence):
    words = sentence.split()

    longestWors = ""
    for item in words:
        if (len(item) > len(longestWors)):
            longestWors = item

    return longestWors


# Testing Ouput
# Tooooooooooo
print(longest_word_in("In Programming We Love Elzero Academy Tooooooooooo Much"))
