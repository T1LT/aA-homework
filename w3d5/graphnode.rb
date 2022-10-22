require 'set'

class GraphNode
    attr_accessor :value, :neighbors
    def initialize(value)
        self.value = value
        self.neighbors = []
    end
end

def bfs(start, target)
    queue = [start]
    visited = Set.new()
    until queue.empty?
        first = queue.shift
        unless visited.include? first
            visited.add(first)
            return first if first.value == target
            queue.push(*first.neighbors)
        end
    end
    nil
end

a = GraphNode.new('a')
b = GraphNode.new('b')
c = GraphNode.new('c')
d = GraphNode.new('d')
e = GraphNode.new('e')
f = GraphNode.new('f')
a.neighbors = [b, c, e]
c.neighbors = [b, d]
e.neighbors = [a]
f.neighbors = [e]

p bfs(a, "b")
p bfs(a, "f")