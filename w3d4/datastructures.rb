class Stack
    def initialize
        @stack = []
    end

    def push(el)
        @stack.push(el)
    end

    def pop
        @stack.pop
    end

    def peek
        @stack[-1]
    end
end

class Queue
    def initialize
        @queue = []
    end

    def enqueue(el)
        @queue.push(el)
    end

    def dequeue
        @queue.shift
    end

    def peek
        @queue[-1]
    end
end

class Map
    def initialize
        @map = []
    end

    def set(key, value)
        (0...@map.length).each do |i|
            if @map[i][0] == key
                @map[i][1] = value
                return key
            end
        end
        @map << [key, value]
    end

    def get(key)
        @map.each do |pair|
            if pair[0] == key
                return pair[1]
            end
        end
        nil
    end

    def delete(key)
        @map.each do |pair|
            if pair[0] == key
                @map.delete(pair)
                return key
            end
        end
        nil
    end
end