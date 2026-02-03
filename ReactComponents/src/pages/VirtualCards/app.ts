// Advanced TypeScript types
type CardId = string & { __brand: 'CardId' };
type UserName = string & { __brand: 'UserName' };

interface Card {
    id: CardId;
    username: UserName;
    createdAt: Date;
    isEditing: boolean;
}

// Type guard
function isCardId(id: string): id is CardId {
    return id.length === 36; // UUID length
}

class CardManager {
    private cards: Map<CardId, Card> = new Map();

    private generateId(): CardId {
        return crypto.randomUUID() as CardId;
    }

    private createCard(username: UserName): Card {
        return {
            id: this.generateId(),
            username,
            createdAt: new Date(),
            isEditing: false
        };
    }

    public addCard(username: string): void {
        const card = this.createCard(username as UserName);
        this.cards.set(card.id, card);
        this.renderCards();
    }

    public deleteCard(id: CardId): void {
        this.cards.delete(id);
        this.renderCards();
    }

    public toggleEdit(id: CardId): void {
        const card = this.cards.get(id);
        if (card) {
            card.isEditing = !card.isEditing;
            this.renderCards();
        }
    }

    private renderCards(): void {
        const container = document.getElementById('cardContainer');
        if (!container) return;

        container.innerHTML = '';
        
        this.cards.forEach(card => {
            const cardElement = document.createElement('div');
            cardElement.className = 'card';
            
            if (card.isEditing) {
                const input = document.createElement('input');
                input.value = card.username as string;
                input.addEventListener('blur', () => {
                    card.username = input.value as UserName;
                    card.isEditing = false;
                    this.renderCards();
                });
                cardElement.appendChild(input);
            } else {
                cardElement.innerHTML = `
                    <h3>${card.username}</h3>
                    <p>Created: ${card.createdAt.toLocaleDateString()}</p>
                    <div class="card-actions">
                        <button class="edit-btn" data-id="${card.id}">Edit</button>
                        <button class="delete-btn" data-id="${card.id}">Delete</button>
                    </div>
                `;
            }

            container.appendChild(cardElement);
        });

        // Add event listeners
        container.querySelectorAll('.edit-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = (e.target as HTMLElement).dataset.id;
                if (id && isCardId(id)) {
                    this.toggleEdit(id);
                }
            });
        });

        container.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = (e.target as HTMLElement).dataset.id;
                if (id && isCardId(id)) {
                    this.deleteCard(id);
                }
            });
        });
    }
}

// Initialize the application
const cardManager = new CardManager();

document.getElementById('addCard')?.addEventListener('click', () => {
    const username = prompt('Enter username:');
    if (username) {
        cardManager.addCard(username);
    }
});
// Advanced Web Components with TypeScript
class InteractiveCard extends HTMLElement {
    private dragging: boolean = false;
    private position: { x: number; y: number } = { x: 0, y: 0 };
    private offset: { x: number; y: number } = { x: 0, y: 0 };

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <style>
                    :host {
                        display: block;
                        position: relative;
                        width: 300px;
                        height: 200px;
                        cursor: move;
                        transform: translate(0, 0);
                        transition: transform 0.2s ease, box-shadow 0.2s ease;
                    }

                    .card {
                        width: 100%;
                        height: 100%;
                        background: linear-gradient(145deg, #ffffff, #f0f0f0);
                        border-radius: 15px;
                        box-shadow: 5px 5px 15px rgba(0,0,0,0.1),
                                  -5px -5px 15px rgba(255,255,255,0.8);
                        padding: 20px;
                        box-sizing: border-box;
                    }

                    .card:hover {
                        box-shadow: 8px 8px 20px rgba(0,0,0,0.15),
                                  -8px -8px 20px rgba(255,255,255,0.9);
                    }

                    ::slotted(*) {
                        margin: 0;
                        font-family: system-ui, sans-serif;
                    }
                </style>
                <div class="card">
                    <slot></slot>
                </div>
            `;

            this.addEventListener('mousedown', this.handleMouseDown.bind(this));
            document.addEventListener('mousemove', this.handleMouseMove.bind(this));
            document.addEventListener('mouseup', this.handleMouseUp.bind(this));
        }
    }

    private handleMouseDown(e: MouseEvent) {
        this.dragging = true;
        this.offset.x = e.clientX - this.position.x;
        this.offset.y = e.clientY - this.position.y;
        this.style.transition = 'none';
    }

    private handleMouseMove(e: MouseEvent) {
        if (!this.dragging) return;

        e.preventDefault();
        this.position.x = e.clientX - this.offset.x;
        this.position.y = e.clientY - this.offset.y;
        this.style.transform = `translate(${this.position.x}px, ${this.position.y}px)`;
    }

    private handleMouseUp() {
        this.dragging = false;
        this.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease';
    }
}

// Advanced Animated List with Virtual Scrolling
class VirtualList extends HTMLElement {
    private items: string[] = [];
    private itemHeight = 50;
    private visibleItems = 10;
    private scrollPosition = 0;
    private container: HTMLDivElement | null = null;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <style>
                    :host {
                        display: block;
                        height: 500px;
                        overflow: hidden;
                        position: relative;
                        border-radius: 10px;
                        background: #ffffff;
                        box-shadow: inset 0 0 15px rgba(0,0,0,0.1);
                    }

                    .viewport {
                        height: 100%;
                        overflow-y: auto;
                        position: relative;
                    }

                    .content {
                        position: absolute;
                        width: 100%;
                        will-change: transform;
                    }

                    .item {
                        height: ${this.itemHeight}px;
                        padding: 0 20px;
                        display: flex;
                        align-items: center;
                        background: white;
                        border-bottom: 1px solid #eee;
                        animation: slideIn 0.3s ease;
                        will-change: transform, opacity;
                    }

                    @keyframes slideIn {
                        from {
                            transform: translateX(-100%);
                            opacity: 0;
                        }
                        to {
                            transform: translateX(0);
                            opacity: 1;
                        }
                    }
                </style>
                <div class="viewport">
                    <div class="content"></div>
                </div>
            `;

            this.container = this.shadowRoot.querySelector('.content') as HTMLDivElement;
            const viewport = this.shadowRoot.querySelector('.viewport');
            
            if (viewport) {
                viewport.addEventListener('scroll', () => {
                    this.handleScroll((viewport as HTMLElement).scrollTop);
                });
            }

            // Generate sample items
            this.items = Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`);
            this.render();
        }
    }

    private handleScroll(scrollTop: number) {
        this.scrollPosition = scrollTop;
        this.render();
    }

    private render() {
        if (!this.container) return;

        const startIndex = Math.floor(this.scrollPosition / this.itemHeight);
        const endIndex = startIndex + this.visibleItems;

        this.container.style.transform = `translateY(${startIndex * this.itemHeight}px)`;
        this.container.innerHTML = this.items
            .slice(startIndex, endIndex)
            .map((item, i) => `
                <div class="item" style="animation-delay: ${i * 50}ms">
                    ${item}
                </div>
            `)
            .join('');
    }
}

// Register custom elements
customElements.define('interactive-card', InteractiveCard);
customElements.define('virtual-list', VirtualList);

// Initialize the demo
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('cardContainer');
    if (container) {
        container.innerHTML = `
            <div class="demo-grid">
                <div class="demo-section">
                    <h2>Interactive Cards</h2>
                    <interactive-card>
                        <h3>Draggable Component</h3>
                        <p>Try dragging this card around!</p>
                    </interactive-card>
                    <interactive-card>
                        <h3>Neumorphic Design</h3>
                        <p>With smooth animations</p>
                    </interactive-card>
                </div>
                <div class="demo-section">
                    <h2>Virtual Scrolling List</h2>
                    <virtual-list></virtual-list>
                </div>
            </div>
        `;
    }
});